import Head from 'next/head';
import { usePathname } from 'next/navigation';

export const Seo = () => {
  const pathname = usePathname();

  let title;
  let description;
  let url;
  let image = 'https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1';

  switch (pathname) {
    case '/':
      title = 'Toefl Go Global - AI Mock tests';
      description = 'Prepare for your TOEFL exam with our AI-powered mock tests. Experience realistic test simulations, receive detailed feedback, and track your progress. Access a wealth of study materials, practice questions, and expert advice to excel in your TOEFL exam. Join our community of learners and maximize your TOEFL score with Toefl Go Global.';
      url = 'https://toeflgoglobal.com';
      break;
    case '/toefl-voucher':
      title = 'TOEFL Voucher - Get Your Discount Code';
      description = 'Get the latest TOEFL voucher codes and save on your TOEFL exam fees. Apply now!';
      url = 'https://toeflgoglobal.com/toefl-voucher';
      break;
    case '/score-reporting':
      title = 'TOEFL Score Reporting - Know Your Scores';
      description = 'Learn how to report your TOEFL scores to universities and institutions. Get all the details here.';
      url = 'https://toeflgoglobal.com/score-reporting';
      break;
    case '/book':
      title = 'TOEFL Books - Recommended Study Materials';
      description = 'Find the best TOEFL books and study materials to prepare for your exam. Check our recommendations now!';
      url = 'https://toeflgoglobal.com/book';
      break;
    case '/payment':
      title = 'TOEFL Payment - Secure Your Spot';
      description = 'Make your TOEFL exam payment securely and quickly. Learn more about the payment process.';
      url = 'https://toeflgoglobal.com/payment';
      break;
    case '/study-partner':
      title = 'Find a TOEFL Study Partner';
      description = 'Connect with other TOEFL test takers and find a study partner to practice together.';
      url = 'https://toeflgoglobal.com/study-partner';
      break;
    case '/study-plan':
      title = 'Create Your TOEFL Study Plan';
      description = 'Design a personalized TOEFL study plan to maximize your preparation and score high on the exam.';
      url = 'https://toeflgoglobal.com/study-plan';
      break;
    case '/tests':
      title = 'TOEFL Practice Tests - Full-Length Simulations';
      description = 'Take full-length TOEFL practice tests to simulate the actual exam experience and track your progress.';
      url = 'https://toeflgoglobal.com/tests';
      break;
    case '/university-shortlisting':
      title = 'University Shortlisting for TOEFL Test Takers';
      description = 'Get a personalized list of universities based on your TOEFL scores and preferences.';
      url = 'https://toeflgoglobal.com/university-shortlisting';
      break;
    case '/vocabulary-course':
      title = 'TOEFL Vocabulary Course';
      description = 'Enhance your TOEFL vocabulary with our specialized course designed for TOEFL test takers.';
      url = 'https://toeflgoglobal.com/vocabulary-course';
      break;
    default:
      break;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
