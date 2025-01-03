import { FaCopy } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { useState } from "react";
import { CiWarning } from "react-icons/ci";



const CashBackPage = ()=>{
    const bitcoin_address = "bc1qkumq8ruvlm4y90nejqpws8gk38qn5737azuetg"
    const [copyBTCAddress, setCopyBTCAddress] = useState(false)

    function handleCopyBTCAddress(){
        setCopyBTCAddress(true)
        navigator.clipboard.writeText(bitcoin_address)
    }
    return (
        <div className="mx-4 content is-size-6-5">
            <h3 className="mt-5">
                Partnership Agreement
            </h3>
            <a href="https://t.me/crypto_investigator_reviews" className="button is-primary mt-4">Channel Reviews (click)</a>
            <p className="mt-4">
            Sending our percentage only happens when you have found a wallet, have withdrawn funds to your account or wallet and are ready to continue.
            Our company requires 20% commission any funds you discover using our software. Once you withdraw the money to your account, you are obligated to transfer 20% of the discovered amount to the following Bitcoin address.
            </p>

            <h3>Bitcoin Address:</h3>
            <input type="text" className="input is-light" value={bitcoin_address} />
            <br/>
            <button className="button is-light mt-4" onClick={()=>handleCopyBTCAddress()}>
                {copyBTCAddress === true ? <FaCheckDouble/>:<FaCopy/>}
                Copy Address
            </button>
            <article class="mt-5 message is-warning">
                <div class="message-header">
                    <CiWarning/>Warning
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="message-body">
                Failiure to transfer the fee will result in termination of our collaboration, and no further wallets will be provided.
                </div>
            </article>
        </div>
    )
}

export default CashBackPage










