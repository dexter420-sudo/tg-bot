import { useState } from "react"
import { FaCopy } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";




const StartPage = ()=>{
    let walletPrivateKey = "5b40a68018cbdf32d790f50125287cfa15bba7fa9ebadeba89f27d4164652c96"
    let walletNetwork = "TRON"
    const [copyPrivateKey, setCopyPrivateKey] = useState(false)

    function handleCopyPrivateKey(){
        setCopyPrivateKey(true)
        navigator.clipboard.writeText(walletPrivateKey)
    }
    return(
        <div className="mx-4 content is-size-6-5">
            <h3 className="has-text-danger is-family-monospace mt-4">Congratulations!</h3>
            <h1 className="is-family-monospace title is-size-5 has-text-centered">A wallet worth 221 USDT is found!</h1>
            <p className="has-text-centered">They are already yours, so read the withdrawal instructions</p>
            <h6>$ 221 — USDT (TRC20)</h6>
            <img src="/assets/startPage/wallet_found.png" alt="" />
            <p className="break-it"><b>Private Key (password): </b>{walletPrivateKey}</p>
            <h5><b>Select Network: </b>{walletNetwork}</h5>
            <button className="button is-light" onClick={()=>handleCopyPrivateKey()}>
                {copyPrivateKey === true ? <FaCheckDouble/>:<FaCopy/>}
                Copy Private Key
            </button>
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
            <img src="/assets/startPage/private_key_qr_code.png" alt="" />
            <p>
                <b>Wallet Type: </b>OKX Exchange
                <br/>
                <a href="https://www.okx.com">https://www.okx.com</a>
            
            </p>
            <article class="mt-5 message is-primary">
                <div class="message-header">
                    <CiWarning/>Site Restricted?
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="message-body">
                Use a vpn or a dns changer if you're restricted from accessing the okx.com website
                </div>
            </article>
            <p>or directly official wallet without registration and kyc on Telegram</p>
            <a href="https://t.me/OKX_WALLET_BOT">@OKX_WALLET_BOT</a>
            <img src="/assets/startPage/okx_telegram.png" alt="" />
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
                Withdraw only from this wallet (OKX Exchange), if you withdraw from other wallets or exchanges, then USDT can be blocked and the wallet will be lost forever!
                </div>
            </article>
            <p>

If you're from India, you can import your wallet all the time. They restricted India to trading only. Cryptocurrency transfers are still available. Or find the app to download OKX on the official website.
            </p>
            <Link to="/video-tutorial?pageNo=2" className="button is-info is-medium is-family-monospace my-5">VIDEO TUTORIAL</Link> <br/>
            <button className="button is-light" onClick={()=>handleCopyPrivateKey()}>
                {copyPrivateKey === true ? <FaCheckDouble/>:<FaCopy/>}
                Copy Private Key
            </button>
            <ul>
                <li>
                    <b>Step 1: </b>Go to the OKX exchange (required) and import the private key to import this wallet.
                    <div className="mt-5">
                        <img src="/assets/startPage/step1-1.webp" alt="" />
                        <p> 
                            <i>Go to the OKX exchange and click "I already have one"</i>
                            
                        </p>
                    </div>


                    <div className="mt-5">
                    <p>Import Found Private Key</p>

                        <img src="/assets/startPage/step1-2.webp" alt="" />
                        <p>
                            <i>Choose a Seed phrase or Private Key </i>
                            
                        </p>

                    </div>

                    <div className="mt-5">
                        <img src="/assets/startPage/step1-3.webp" alt="" />
                        <p>
                            <i>Enter the Private Key provided by our service</i>
                        </p>
                    </div>


                </li>
                <li>
                    <div className="mt-5">
                    <b>Step 2: </b>Select the tron network

                        <img src="/assets/startPage/step2-1.jpeg" alt="" />
                        <p>
                            <i className="has-text-warning">Do not forget this step, as the balance won't show up if you don't select tron network</i>
                        </p>
                    </div>
                </li>
                <li className="mt-5">
                    <b>Step 3: </b>Check the cryptocurrency in your account and send it to any of your wallet or exchanges.
                    <img className="mt-3" src="/assets/startPage/step2-2.webp" alt="" />
                    <p>
                        <i>
                            Be sure to check the balance! Select all USDT coins!
                        </i>
                    </p>
                </li>
                <li className="mt-5">
                    <b>Step 4: </b>After successful crediting of the account, transfer 20% of this cryptocurrency to us and you can continue to search for lost crypto wallets with us.
                    <img src="/assets/step4.webp" alt="" />
                    <p><i>Withdraw cryptocurrency into your accounts and continue to earn with our service.</i></p>
                </li>
            </ul>
        </div>
    )
}

export default StartPage