import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';

console.log("posts");

type Comment = {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
};

type Post = {
  id?: string;
  title: string;
  content: string;
  userId: string;
  createdAt: Date;
  likes: number;
  comments: Comment[];
};

export async function GET(req: NextRequest) {
  try {
    const postsCollection = collection(db, 'posts');
    const snapshot = await getDocs(postsCollection);
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Post[];
    return NextResponse.json(posts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, userId } = await req.json();
    const newPost: Post = { title, content, userId: userId || 'Guest', createdAt: new Date(), likes: 0, comments: [] };
    const docRef = await addDoc(collection(db, 'posts'), newPost);
    return NextResponse.json({ id: docRef.id, ...newPost });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...data } = await req.json();
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, data);
    return NextResponse.json({ id, ...data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const docRef = doc(db, 'posts', id);
    await deleteDoc(docRef);
    return NextResponse.json({ message: 'Post deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const { id, action, content, userId } = await req.json();
  try {
    const docRef = doc(db, 'posts', id);
    const docSnapshot = await getDoc(docRef);
    const post = docSnapshot.data() as Post;

    if (action === 'like') {
      await updateDoc(docRef, { likes: post.likes + 1 });
      return NextResponse.json({ id, likes: post.likes + 1 });
    } else if (action === 'comment') {
      const newComment: Comment = { id: `${Date.now()}`, userId, content, createdAt: new Date() };
      const updatedComments = [...post.comments, newComment];
      await updateDoc(docRef, { comments: updatedComments });
      return NextResponse.json({ id, comments: updatedComments });
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
