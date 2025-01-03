
import InfoPage from './infoPage';
import StartPage from './startPage';
import CashBackPage from './cashbackPage';
import { useState, useEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { FaRegGrinStars } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { useSearchParams } from 'react-router-dom';

const Home = ()=> {
  //we'll set page 1 = info page
  // page 2 = start page
  // page 3 = cashback page
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(1)
  const pageNo = searchParams.get("pageNo")

  useEffect(()=>{
    if(pageNo){
      setPage(parseInt(pageNo, 10))
    }else{
      setPage(1)
    }

  },[pageNo])

  function handlePage(pageNo){
    setPage(pageNo)
  }

  const handleTabClick = (pageNo) => {
    setPage(pageNo)
    window.history.pushState({}, "", `/?pageNo=${pageNo}`)
  }


  return (
    <div className="App" id="ancestor">
      <div id="child1">
        {page === 1 && <InfoPage handlePage={handlePage}/>}
        {page === 2 && <StartPage/>}
        {page === 3 && <CashBackPage/>}
      </div>
      {/* <BottomMenu/> */}

      <div id="child2" class="tabs is-toggle is-fullwidth">
        <ul>
          <li onClick={()=>handleTabClick(1)} className={page === 1 ? "is-active":""}>
            <a>
              <span class="icon is-small">
              <FaInfoCircle/>

              </span>
              <span>Info</span>
            </a>
          </li>
          <li onClick={()=>handleTabClick(2)} className={page === 2 ? "is-active":""}>
            <a>
              <span class="icon is-small">
                <FaRegGrinStars/>
              </span>
              <span>Start</span>
            </a>
          </li>
          <li onClick={()=>handleTabClick(3)} className={page === 3 ? "is-active":""}>
            <a>
              <span class="icon is-small">
                <BsCashCoin/>
              </span>
              <span>Cashback</span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Home;
