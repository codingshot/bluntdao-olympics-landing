import React from "react";
import style from "./Roadmap.module.css";
import cigar from "../../assets/imgs/roadmap-cigar.png";

const Roadmap = () => {
  return (
    <div className={`${style.container} ${style.roadmapContainer}`}>
      <div className={`${style.section} section`}>
        <div className={style.roadmap}>
          <div className={style.header}>Roadmap</div>
          <div className={style.subheader}>
            BluntDAO is on the road to onboarding the next million users via
            Proof of Sesh
          </div>
          <div className={style.roadmapItem}>
            <div className={style.m_heading}>Quarter 1</div>
            <div className={style.m_subheading}>
              THE ROAD TO THE FIRST 420 (January - March 2022)
            </div>
            <ul>
              <li className={style.done}>
                🍃 Formation During Miami Hack Week: Genesis Proof of Sesh
              </li>
              <li className={style.done}>🍃 FireLeaf Collab</li>
              <li className={style.done}>
                🍃 Launch of Discord , Twitter, Telegram
              </li>
              <li className={style.done}>
                🍃 SOLANA Los Angeles Hacker House LA Mint
              </li>
              <li className={style.done}>
                🍃 Events: NYC, Miami, LA Solana Hacker House, Eth Denver
              </li>
              <li className={style.done}>
                🍃 Start of Tokin’ Tuesday in Miami
              </li>
              <li>🍃 Shrimp Society NFT Airdrop</li>
              <li>🍃 ETH Denver Blunts (Unreleased)</li>
              <li>🍃 Begin Seshaverse - VR/ AR Blunt World</li>
              <li className={style.done}>
                🍃 BTC 2022 SESH w/ DROPOUT DAO, MPA, Liberland
              </li>
              <li className={style.done}>
                🍃 Start New York, Denver, LA, San Diego, Miami chapters
              </li>
            </ul>
          </div>

          <div className={style.roadmapItem2}>
            <div className={style.m_heading}>Quarter 2</div>
            <div className={style.m_subheading}>
              SOLANA X NEAR (April - June 2022)
            </div>
            <ul>
              <li className={style.done}>🍃 Daily Sesh Twitter Spaces</li>
              <li className={style.done}>🍃 Mock Up of Proof of Sesh v3</li>
              <li className={style.done}>🍃 Investors & Influencer Pitch Deck</li>
              <li className={style.done}>🍃 BluntDAO Dev Guild Formed</li>
              <li className={style.done}>🍃 Regular Medium Articles</li>
              <li className={style.done}>🍃 NFT DAO Integration through Squads</li>
              <li className={style.done}>🍃 One of First Major Use Case Proof of Sesh v2 with Satori Creator Studio on NEAR(420 validators)</li>
              <li className={style.done}>🍃 Beginning of Partnerships w/ Brands</li>
              <li className={style.done}>🍃 Events: Permissionless, Consensus, NFT NYC, xHacks</li>
              <li className={style.done}>🍃 Start of BluntDAO x NEAR Hacks Tour</li>
              <li>🍃 DAO Listings: Barracuda, DAOHQ, DAOLens, ListofDAOs</li>
              <li className={style.done}>🍃 Discord Verification integration (Solana + NEAR)</li>
              <li className={style.done}>🍃 Beginning of Soul Bound NFT Minter</li>
              <li className={style.done}>🍃 Start Austin, San Antonio, Brazil, Barcelona, Morocco, Lisbon, France, Berlin Chapters</li>
              <li className={style.done}>🍃 Holaplex Solana Marketplace</li>
              <li className={style.done}>🍃 Proof of Sesh w Genadrop</li>
              <li className={style.done}>🍃 BluntDAO on Instagram</li>
            </ul>
          </div>

          <div className={style.roadmapItem}>
            <div className={style.m_heading}>Quarter 3</div>
            <div className={style.m_subheading}>Fundraise + Proof of Sesh v3 (July - September 2022)</div>
            <ul>
              <li>🍃 Vendored Partnered Events in Miami x New York</li>
              <li>🍃 BluntDAO Event Passes on Solana</li>
              <li>🍃 3rd Blockchain: 420 OG Validators</li>
              <li className={style.done}>🍃 BluntDAO Goes to Europe (ETH CC, NEARCON)</li>
              <li className={style.done}>🍃 BluntDAO Goes to Africa</li>
              <li className={style.done}>🍃 BluntDAO Merch Store</li>
              <li>🍃 Call for Advisors</li>
              <li className={style.done}>🍃 BluntDAO Mailing List, LinkedIn</li>
              <li>
                🍃 Introduction of JointsDAO, SpliffDAO, subDAOs powered by
                Proof of Sesh
              </li>
              <li className={style.done}>
                🍃 Transition Website {"->"} Web App
              </li>
              <li className={style.done}>🍃 BluntDAO HACKS @ BTC Center New York</li>

            </ul>
          </div>
          <div className={style.roadmapItem2}>
            <div className={style.m_heading}>Ounce 1</div>
            <div className={style.m_subheading}>
              BluntDAO Goes International / SubDAOs (October- December 2022)
            </div>
            <ul>
              <li className={style.done}>🍃 SpliffDAO Launches with SOAP on Solana at Breakpoint</li>
              <li className={style.done}>🍃 JointsDAO Launches in the U.S</li>
              <li className={style.done}>🍃 Branded Activations / Proof of Seshes</li>
              <li className={style.done}>🍃 Struggles with Soberity - Core team begins to sober up</li>

            </ul>
          </div>
          <div className={style.roadmapItem}>
            <div className={style.m_heading}>35 grams</div>
            <div className={style.m_subheading}>EVM Blunts (January - March 2023)</div>
            <ul>
              <li className={style.done}>🍃 DAODenver / NFTDenver Event, EthDenver the Start of EVM</li>
              <li className={style.done}>🍃BluntDAO on Web3 Social </li>
              <li className={style.done}>🍃BluntDAO x PizzaDAO Global Pizza Day in Morcco </li>
            </ul>
          </div>
          <div className={style.roadmapItem2}>
            <div className={style.m_heading}>1.5 ounce</div>
            <div className={style.m_subheading}>Q6 Halal Vibes(April - June 2023)</div>
            <ul>
              <li className={style.done}>🍃 Ramadan & BluntDAO Core Severely Sturggles With Sobriety</li>
              <li className={style.done}>🍃 A simple onboard link with ShardDog GOing around but no one really knows how to onboard anymore</li>
            </ul>
          </div>
          <div className={style.roadmapItem2}>
            <div className={style.m_heading}>Quarter 7</div>
            <div className={style.m_subheading}> Not Doing Anything But Vibes(July - September 2023)</div>
            <ul>
              <li className={style.done}>🍃 Minimally Onboarding at Eth Global</li>
              <li className={style.done}>🍃 BluntDAO seems lost, SmokeDAO is a year strong now, at least they out here</li>
              <li className={style.done}>🍃 BluntDAO core works on Proof of Vibes, Infra, & more</li>
            </ul>
          </div>
          <div className={style.roadmapItem}>
            <div className={style.m_heading}>2 OUNCES</div>
            <div className={style.m_subheading}>COMEBACK SEASON(October - December 2023)</div>
            <ul>
              <li className={style.done}>🍃 BluntDAO Core Is Back Getting Litttt</li>
              <li className={style.done}>🍃 Blunt DAO solves onboarding with Web3 Social, DAO Onboarding, and Account Abstraction to subDAOse</li>
              <li className={style.done}>🍃 Blunt DAO EthIndia and Art Basel Miami COMEBACK</li>
            </ul>
          </div>
          <div className={style.roadmapItem2}>
            <div className={style.m_heading}>63 grams</div>
            <div className={style.m_subheading}>The Pre-roll(January - March 2024)</div>
            <ul>
              <li className={style.done}>🍃 BluntDAO back at EthDenver</li>
            </ul>
          </div>
          <div className={style.roadmapItem}>
            <div className={style.m_heading}>10 quarters</div>
            <div className={style.m_subheading}>Unlimitted Sesh Fund(April - June 2024)</div>
            <ul>
            <li className={style.done}>🍃 Start of TouchGrass Series at NFT NYC</li>
              <li>🍃 BluntDAO launches nounish fork on base on 420</li>
              <li>🍃 Unlimitted Sesh Fund to request for Seshed</li>
              <li>🍃 Blunt DAO EthIndia and Art Basel Miami COMEBACK</li>
            </ul>
          </div>
          <img className={style.backgroundImg} src={cigar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
