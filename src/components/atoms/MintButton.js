import React, { useEffect, useState } from "react";

import MetamaskButton from "../atoms/MetamaskButton";
import {
  CONTRACT_URL,
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  COST,
} from "../../configs/contract.js";

import { NETWORK } from "../../configs/network";
import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";

export default function MintButton() {
  const { ethereum } = window;
  const COST = "5000000000000000";
  var provider = null;
  if (ethereum) {
    provider = new ethers.providers.Web3Provider(ethereum);
  }
  const signer = provider ? provider.getSigner() : null;
  const { status, chainId, metaState } = useMetaMask();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const [isSaleActive, setSaleActive] = useState();
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    let isMounted = true; // Add this line to track if the component is mounted

    async function fetchData() {
      try {
        const [isActive, totalSupply] = await Promise.all([
          contract.isActive(),
          contract.getTotalSupply(),
        ]);
        if (isMounted) {
          // Check if the component is still mounted before setting the state
          setSaleActive(isActive);
          setTotalCount(totalSupply.toString());
        }
      } catch (error) {
        console.error("Error fetching data from the contract:", error);
        // Optionally handle the error, e.g., by setting state to show an error message
      }
    }

    fetchData();

    // Cleanup function to avoid setting state after the component has unmounted
    return () => {
      isMounted = false;
    };
  }, [contract]); // Depend on `contract` to re-run this effect if it changes

  const onMint = async () => {
    setIsLoading(true);
    try {
      const transaction = await contract.mint({
        value: ethers.utils.parseEther("0.005"),
      }); // Assuming 0.005 ETH; adjust as necessary
      await transaction.wait(); // Wait for the transaction to be mined
      await updateTotalCount(); // Refresh total count after minting
      setIsLoading(false);
    } catch (e) {
      console.error("Error minting contract:", e);
      setIsLoading(false);
    }
  };

  // Define a function to update the total supply
  const updateTotalCount = async () => {
    try {
      const totalSupply = await contract.getTotalSupply();
      setTotalCount(totalSupply.toString()); // Assuming `getTotalSupply` returns a BigNumber
    } catch (error) {
      console.error("Error fetching total supply:", error);
    }
  };

  return (
    <div className="mint-button">
      {" "}
      {status === "connected" ? (
        chainId == NETWORK.chainId ? (
          isSaleActive ? (
            <button
              type="button"
              className="ui button primary"
              style={{ marginTop: "10px" }}
              onClick={onMint}
            >
              {isLoading ? "MINTING..." : "MINT"}
            </button>
          ) : (
            <button
              type="button"
              className="ui button primary"
              style={{ marginTop: "10px" }}
            >
              SALES PAUSED
            </button>
          )
        ) : (
          <>
            <MetamaskButton />
          </>
        )
      ) : (
        <>
          <MetamaskButton />
        </>
      )}
      {totalCount && (
        <h3
          className="ui header"
          style={{
            color: "white",
            textShadow: "1px 1px black",
            fontWeight: 600,
          }}
        >
          {totalCount}/69 Minted
        </h3>
      )}
    </div>
  );
}
