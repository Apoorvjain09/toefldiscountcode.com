import React from 'react'

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="max-w-sm flex flex-col justify-evenly p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[15rem] w-[80%] sm:w-[30%]">
      <a href={link}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Click here to Download
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  );
};


interface SectionProps {
  title: string;
  cards: CardProps[];
}


const Section: React.FC<SectionProps> = ({ title, cards }) => {
  return (
    <section className='mt-10'>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex gap-7 flex-wrap items-center justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

function Page() {
  const sections = [
    {
      title: 'Reading',
      cards: [
        {
          title: 'Reading Material 1',
          description: 'Description for Reading Material 1.',
          link: '#'
        },
        {
          title: 'Reading Material 2',
          description: 'Description for Reading Material 2.',
          link: '#'
        },
        {
          title: 'Reading Material 3',
          description: 'Description for Reading Material 3.',
          link: '#'
        }
      ]
    },
    {
      title: 'Listening',
      cards: [
        {
          title: 'Listening Material 1',
          description: 'Description for Listening Material 1.',
          link: '#'
        },
        {
          title: 'Listening Material 2',
          description: 'Description for Listening Material 2.',
          link: '#'
        },
        {
          title: 'Listening Material 3',
          description: 'Description for Listening Material 3.',
          link: '#'
        }
      ]
    },
    {
      title: 'Writing',
      cards: [
        {
          title: 'Writing Material 1',
          description: 'Description for Writing Material 1.',
          link: '#'
        },
        {
          title: 'Writing Material 2',
          description: 'Description for Writing Material 2.',
          link: '#'
        },
        {
          title: 'Writing Material 3',
          description: 'Description for Writing Material 3.',
          link: '#'
        }
      ]
    },
    {
      title: 'Speaking',
      cards: [
        {
          title: 'Speaking Material 1',
          description: 'Description for Speaking Material 1.',
          link: '#'
        },
        {
          title: 'Speaking Material 2',
          description: 'Description for Speaking Material 2.',
          link: '#'
        },
        {
          title: 'Speaking Material 3',
          description: 'Description for Speaking Material 3.',
          link: '#'
        }
      ]
    },
    {
      title: 'Guides',
      cards: [
        {
          title: 'Guide 1',
          description: 'Description for Guide 1.',
          link: '#'
        },
        {
          title: 'Guide 2',
          description: 'Description for Guide 2.',
          link: '#'
        },
        {
          title: 'Guide 3',
          description: 'Description for Guide 3.',
          link: '#'
        }
      ]
    },
    {
      title: 'Vocabulary',
      cards: [
        {
          title: 'Vocabulary Material 1',
          description: 'Description for Vocabulary Material 1.',
          link: '#'
        },
        {
          title: 'Vocabulary Material 2',
          description: 'Description for Vocabulary Material 2.',
          link: '#'
        },
        {
          title: 'Vocabulary Material 3',
          description: 'Description for Vocabulary Material 3.',
          link: '#'
        }
      ]
    },
    {
      title: 'Grammar',
      cards: [
        {
          title: 'Grammar Material 1',
          description: 'Description for Grammar Material 1.',
          link: '#'
        },
        {
          title: 'Grammar Material 2',
          description: 'Description for Grammar Material 2.',
          link: '#'
        },
        {
          title: 'Grammar Material 3',
          description: 'Description for Grammar Material 3.',
          link: '#'
        }
      ]
    }
  ]

  return (
    <div style={{
      backgroundImage: `url(/assets/background-books.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      borderRadius: '0.5rem'
    }}>
      <div className="container mx-auto p-4 items-center text-center">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

export default Page
