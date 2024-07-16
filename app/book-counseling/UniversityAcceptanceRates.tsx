import React from 'react';

const UniversityAcceptanceRates = () => {
  const universities = [
    {
      name: 'Harvard University',
      generalAcceptanceRate: '5%',
      TGGAcceptanceRate: '21%',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg', // Update with actual path
    },
    {
      name: 'Johns Hopkins University',
      generalAcceptanceRate: '18%',
      TGGAcceptanceRate: '51%',
      logo: 'https://scontent.fdel1-3.fna.fbcdn.net/v/t39.30808-6/347780536_143549958636456_4497443747508112018_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pxGgm0V6uPUQ7kNvgE_zJhG&_nc_ht=scontent.fdel1-3.fna&oh=00_AYAlAwlZC5x8KRQwZGqi1rrZ6gst3Od_pFO95exEELCCpw&oe=669B56DB', // Update with actual path
    },
    {
      name: 'Columbia University',
      generalAcceptanceRate: '15%',
      TGGAcceptanceRate: '33%',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Columbia_coat_of_arms_no_crest.png', // Update with actual path
    },
    {
      name: 'Imperial College London',
      generalAcceptanceRate: '15%',
      TGGAcceptanceRate: '37%',
      logo: 'https://scontent.fdel1-5.fna.fbcdn.net/v/t39.30808-1/243102407_964325147767788_1388098936833669050_n.png?stp=dst-png_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=x1jaYTTZVUoQ7kNvgG632nx&_nc_ht=scontent.fdel1-5.fna&oh=00_AYDl4VmJjOg2odOaNndCfDwBoM_TdvQQOY7wKQanmCR1Mw&oe=669B80B7', // Update with actual path
    },
    {
      name: 'Oxford University',
      generalAcceptanceRate: '17%',
      TGGAcceptanceRate: '27%',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgzcmn3GW6XbjEeU62Zq9LkbfELmZP2qahw&s', // Update with actual path
    },
    {
      name: 'Cornell University',
      generalAcceptanceRate: '15%',
      TGGAcceptanceRate: '35%',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Cornell_Big_Red_logo.svg/1024px-Cornell_Big_Red_logo.svg.png', // Update with actual path
    },
    {
      name: 'Duke University',
      generalAcceptanceRate: '20%',
      TGGAcceptanceRate: '52%',
      logo: 'https://www.dropbox.com/scl/fi/dpr4p1kxk91q271dud1dn/Duke-University-Logo.png?rlkey=15uaeh3yfiyp2qvvf6njzlu7x&st=o4156dvg&raw=1', // Update with actual path
    },
    {
      name: 'University of Pennsylvania',
      generalAcceptanceRate: '15%',
      TGGAcceptanceRate: '27%',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1024px-UPenn_shield_with_banner.svg.png', // Update with actual path
    },
    {
      name: 'University of Cambridge',
      generalAcceptanceRate: '20%',
      TGGAcceptanceRate: '41%',
      logo: 'https://www.dropbox.com/scl/fi/bsjzzzfiqp3goegmiyqt7/university-of-cambridge-logo.png?rlkey=z4v7u57df5gdqgbw273jwas1v&st=rgd6yp97&raw=1', // Update with actual path
    },
  ];

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold text-blue-600">ToeflGoGlobal Acceptance Rate</h2>
          <p className="mt-4 text-gray-500 text-xl">
            On an average <span className="font-bold">ToeflGlobian have 3X</span> more chances of landing a dream admit in top universities than through other consultancies or themselves
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((university, index) => (
            <div key={index} className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              <div className="flex items-center mb-4">
                <img src={university.logo} alt={university.name} className="w-10 h-10 mr-4" />
                <h3 className="text-lg font-bold">{university.name}</h3>
              </div>
              <p className="text-gray-600">General Acceptance Rate: {university.generalAcceptanceRate}</p>
              <p className="text-green-500 font-bold">TGG Acceptance Rate: {university.TGGAcceptanceRate}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            target='_blank'
            href="https://www.dropbox.com/scl/fi/rh6adxjlci8oe3zxg6sbe/Universities-list-Counseling.xlsx?rlkey=5iav0nyd6wwm8sp3bxgq0lv62&st=bwh4x1v2&dl=0"
            className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniversityAcceptanceRates;
