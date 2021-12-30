import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title: "Intel will put unvaccinated employees on unpaid leave",
      description:
        "Intel is giving unvaccinated employees until January 4th to get vaccinated or submit a religious or medical exemption. If an exemption isn’t granted, or the employee fails to get vaccinated, Intel will place them on unpaid leave for at least three months.",
      url: "https://www.theverge.com/2021/12/21/22849074/intel-unvaccinated-employees-unpaid-leave",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/ZgUG4EmiNYiIctboPBLPscJyCjE=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22248421/acastro_210120_1777_intel_0002.jpg",
      publishedAt: "2021-12-22T00:15:12Z",
      content:
        "Employees have until January 4th to submit an exemption or get vaccinated\r\nIllustration by Alex Castro / The Verge\r\nIntel has reportedly notified employees that anyone who remains unvaccinated will n… [+2299 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "‘The Argument’",
      title:
        "Sherrilyn Ifill: ‘There Is No Guarantee We Make It Out of This Period as a Democracy’",
      description:
        "After almost a decade at the NAACP’s Legal Defense and Educational Fund, Ifill explains why advocacy is an essential part of her legal work.",
      url: "https://www.nytimes.com/2021/12/22/opinion/sherrilyn-ifill-naacp-kyle-rittenhouse.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/12/22/opinion/22argument-image/22argument-image-facebookJumbo.jpg",
      publishedAt: "2021-12-22T10:00:13Z",
      content:
        "Last month, Kyle Rittenhouse was acquitted on all charges related to the shooting of two people at a Black Lives Matter protest in Kenosha, Wisc. Before, during and after the trial, journalists and p… [+831 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "U.S. SEC denies Apple's bid to dismiss shareholder proposal on concealment clauses - Reuters",
      description:
        'The U.S. Securities and Exchange Commission has denied Apple Inc\'s <a href="https://www.reuters.com/companies/AAPL.O" target="_blank">(AAPL.O)</a> bid to exclude a shareholder proposal that would require the company to inform investors about its use of non-di…',
      url: "https://www.reuters.com/legal/litigation/us-sec-denies-apples-bid-dismiss-shareholder-proposal-concealment-clauses-2021-12-22/",
      urlToImage:
        "https://www.reuters.com/resizer/RuO7VhsuoWXSTt1KWcr6OBOZiXE=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W3KEN23MLZOXTDJM7Z4HEX3WDY.jpg",
      publishedAt: "2021-12-22T02:13:00Z",
      content:
        "The company and law firm names shown above are generated automatically based on the text of the article. We are improving this feature as we continue to test and develop in beta. We welcome feedback,… [+2199 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Global Markets in 2021: Recoveries, reflation and wrecking balls - Reuters",
      description:
        "For global financial markets, the second year of the COVID pandemic has been nearly as dramatic as the first.",
      url: "https://www.reuters.com/markets/europe/global-markets-2021-recoveries-reflation-wrecking-balls-2021-12-22/",
      urlToImage:
        "https://www.reuters.com/resizer/TPtyKeYQLqm_rBrry-jvypws1vY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N7CIBNC4KRIQ7BOKWOTIKLW66M.jpg",
      publishedAt: "2021-12-22T05:01:00Z",
      content:
        "LONDON/NEW YORK, Dec 22 (Reuters) - For global financial markets, the second year of the COVID pandemic has been nearly as dramatic as the first.\r\nThe stocks bulls have stayed firmly in charge, surgi… [+8417 chars]",
    },
  ];

  constructor() {
    super();
    console.log("hello I am constructor from News component");
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f0766139a1c94f24ba5c927a553d93f1";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles});

  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsDaily - Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description.slice(0,90):""}
                  imageUrl={element.urlToImage?element.urlToImage:"https://www.reuters.com/resizer/TPtyKeYQLqm_rBrry-jvypws1vY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N7CIBNC4KRIQ7BOKWOTIKLW66M.jpg"}
                  newsUrl={element.url}
                />
            </div>
            })}
        </div>
      </div>
    );
  }
}

export default News;
