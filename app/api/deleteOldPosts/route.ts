import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../firebase';
import { collection, getDocs, deleteDoc, query, orderBy, limit } from 'firebase/firestore';

export async function DELETE(req: NextRequest) {
  const postsCollection = collection(db, 'posts');
  const q = query(postsCollection, orderBy('createdAt', 'asc'), limit(200));
  const snapshot = await getDocs(q);

  snapshot.docs.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });

  return NextResponse.json({ message: 'Old posts deleted' });
}
