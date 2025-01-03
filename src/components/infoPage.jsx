import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom"

const InfoPage = ({handlePage}) => {
    const bot_id = "@crypto_chain_investigator_bot"

    return(
        <div>
            <div className="content mx-4 is-size-6-5">
                <h3 className="mt-5 has-text-centered subtitle is-size-5 has-text-weight-bold s-family-sans-serif is-family-monospace">
                    Welcome to Crypto Chain Investigator!
                </h3>
                <p>This is a real bot, on which you can earn from 100 USDT per day</p>
                <ul>
                    <li>without any investment or payment</li>
                    <li>completely legal</li>
                    <li>no need to register</li>
                    <li>remotely, all you need is your phone</li>
                </ul>

                <p>And it's not click bait, read this guide, click start and today you will earn your first hundreds of dollars and
                    withdrawn to your account.
                </p>
                <p>
                    Look for abandoned BTC/USDT/ETH wallets and earn using our software and the power of our community.
                </p>

                <p>
                Our service finds lost private keys, a private key is a wallet password. Video tutorial on the example of the most lost wallets on OKX exchange and how to log in to a lost wallet
                </p>

                <Link to="/video-tutorial?pageNo=1" className="mt-3 button is-info is-medium is-family-monospace">VIDEO TUTORIAL</Link>

                <h3 className="is-size-5">
                    How it works
                </h3>

                <ul className="mt-5">
                    <li>
                        <p>
                            <b>Step 1: </b>You go to our bot {bot_id} and read the FAQ and partnership agreement.
                        </p>
                        <img src="/assets/step1.png" alt="" />
                    </li>
                    <li className="mt-5">
                        <p>
                        <b>Step 2: </b>After you have familiarized yourself with everything, go to the main menu “Launch” and click start searching for wallets
                        </p>
                        <img src="/assets/step2.png" alt="" />
                    </li>
                    <li className="mt-5">
                        <p>
                        <b>Step 3: </b>For new players we have made things easy, the first wallets are guaranteed to be found today, we even give 70% of our processing power to new players to let them discover our functionality.
                        We are on the lookout for honest and reliable people, which may include searching for private key matching for forgotten BTC/USDT/ETH wallets and more.
                        </p>
                    </li>
                    <li className="mt-5">
                        <p>
                        <b>Step 4: </b>After the wallet is found the system will calculate in which network and will give private key and instruction how to enter, how to withdraw and so on.
                        </p>
                        <article class="mt-5 message is-danger">
                          <div class="message-header">
                          <CiWarning/>Warning
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                          </div>
                          <div class="message-body">
                          Withdraw funds only from the wallet that the system indicates. if you access from other wallets or exchanges, there is a great risk to lose all the funds and block your wallet forever!

                          </div>
                        </article>
                        <img src="/assets/step3.png" alt="" />
                    </li>
                    <li className="mt-5">
                        <p>
                        <b>Step 5: </b>Get access to your wallet by following the instructions or if you're a professional, do it your way. Withdraw funds to your own wallets and exchanges where you prefer. It's completely legal: these are all the lost crypto wallets that we match the private key to using the computer power of our community.
                        </p>
                        <article class="mt-5 message is-warning">
                          <div class="message-header">
                          <CiWarning/>Attention
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                          </div>
                          <div class="message-body">
                          The private keys is like a password. Who knows the private keys from the wallet - he owns the wallet and can do what he wants with it. Do not pass the private keys to other people to avoid losing access to crypto.


                          </div>
                        </article>
                        <img src="/assets/step4.webp" alt="" />
                    </li>
                </ul>

                <p>
                    if you have successfully withdrawn everything and want to continue working with us: pay 20% commission and the system will start looking for new wallets.
                </p>
                <p>
                    <b>Important point, only for new players on their first time we provide our power, so the search can be so fast, in the next times your power is used and the wallet can be searched from 2 hours to 1 week.</b>
                </p>
                <button onClick={()=>handlePage(2)} className="button is-family-monospace is-info">TRY NOW</button>

            </div>
        </div>

    )
}


export default InfoPage;