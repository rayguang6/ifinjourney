// CommunityNews.js
import React from 'react';

const CommunityNews = () => {
  const news = [
    {
      title: "Islamic Finance Gains Momentum Globally",
      snippet: "The global Islamic finance sector is expected to reach $3.8 trillion by 2023, according to a recent report.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUfBv_mVXBVoVrdnFIuAwzN33MBOTK_22M4wat_Wi4zkc4GRccTBqFLIvEJktsGJ5hIk&usqp=CAU",
    },
    {
      title: "New Shariah-Compliant Funds Launched",
      snippet: "Two new Shariah-compliant funds have been introduced to cater to growing investor demand.",
      imageUrl: "https://assets.theedgemarkets.com/20230302_PEO_LAUCHING-AMANAHRAYA-SYARIAH-INCOME-FUND_ZHD_0134_20230302144117_theedgemarkets.jpg",
    },
    {
      title: "Regulatory Advances in Islamic Finance",
      snippet: "Recent regulatory advancements are set to further accelerate the growth of Islamic financial services.",
      imageUrl: "https://www.lowyat.net/wp-content/uploads/2020/08/Sukuk-Prihatin.jpg",
    },
  ];

  const events = [
    {
      title: "Shariah-Compliant Investment Webinar",
      date: "April 10, 2024",
      imageUrl: "https://d2zo35mdb530wx.cloudfront.net/_media/eyJrZXkiOiJfbWVkaWEvVUNQdGh5c3NlbmtydXBwQUcvM2IyYzAxYWQtY2U4Ni00YWNmLWJmZmEtZDIxNTU5NjNiYmU2L0NhcGl0YWwtTWFya2V0LVVwZGF0ZV8xMS0yMDIyX1JLWjczMDMtLTEtLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTI4MH19fQ==",
    },
    {
      title: "Islamic Banking Conference",
      date: "May 15, 2024",
      imageUrl: "https://muslimmirror.com/eng/wp-content/uploads/2018/11/muslimmirror-pic.png",
    },
    {
      title: "Halal Industry & Its Financial Implications",
      date: "June 20, 2024",
      imageUrl: "https://azka.zakat.com.my/wp-content/uploads/2022/09/iBAF-2022.jpeg",
    },
  ];

  return (
    <aside className="w-full bg-white p-4 overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Islamic Finance Insights</h2>

      {/* Insider News Section */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-3 text-primary">Insider News</h3>

{news.map((item, index) => (
  <div key={index} className="flex items-center mb-4">
    <img src={item.imageUrl} alt="News" className="w-16 h-16 object-cover mr-4 rounded"/>
    <div>
      <h4 className="font-semibold text-md">{item.title}</h4>
      {/* Truncate snippet to 50 characters or fewer */}
      {/* <p className="text-sm">{item.snippet.length > 50 ? `${item.snippet.substring(0, 50)}...` : item.snippet}</p> */}
    </div>
  </div>
))}

      </div>

      {/* Divider */}
      <hr className="my-4"/>

      {/* Events Section */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-3 text-primary">Upcoming Events</h3>
        {events.map((event, index) => (
          <div key={index} className="mb-4">
            <img src={event.imageUrl} alt="Event" className="w-full h-auto rounded mb-2"/>
            <div>
              <h4 className="font-semibold">{event.title}</h4>
              <p className="text-sm">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CommunityNews;
