// import React, { useEffect } from "react";
// import Header from "../Header";
// import { Link } from "react-router-dom";

// import { useParams } from "react-router";

import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { NETWORK } from "../../configs/network";

const MetamaskButton = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  // Bind events only once
  const [isBinded, setBinded] = useState(false);

  // Bind
  useEffect(() => {
    if (ethereum && !isBinded) {
      ethereum.on("accountsChanged", (_accounts) => {
        console.log("Account as been updated", _accounts);
      });
      ethereum.on("chainChanged", (_chainId) => {
        console.log("Chain as been updated - Force reaload (best practice)");
        window.location.reload();
      });
      console.log("account", account);
      setBinded(true);
    }
  }, [ethereum, isBinded]);

  const onClick = async () => {
    if (chainId !== NETWORK.chainId) {
      await trySwitchChain(ethereum);
    } else if (status === "notConnected") {
      connect();
    } else {
      console.log("Do nothing now");
    }
  };

  const isDisabledStatus =
    ["initializing", "connecting", "unavailable"].indexOf(status) !== -1;
  if (status === "unavailable") {
    return (
      <a
        className="ui button connect item"
        href="http://metamask.io/"
        rel="noreferrer"
        target="_blank"
      >
        Install Metamask
      </a>
    );
  } else if (status === "connected" && chainId === NETWORK.chainId) {
    return <span style={{ marginRight: "30px" }}>Connected</span>;
  } else {
    return (
      <button
        disabled={isDisabledStatus && "disabled"}
        className="ui button connect item"
        type="button"
        onClick={onClick}
      >
        {(chainId !== NETWORK.chainId &&
          `Switch to chain ${NETWORK.chainName}`) ||
          (status === "initializing" && "Initializing") ||
          (status === "notConnected" && "Connect to Metamask") ||
          (status === "connecting" && "Connecting") ||
          // || ((count === 0) && "Empty")
          "Connected"}
      </button>
    );
  }
};

const trySwitchChain = async (ethereum) => {
  try {
    console.log("NETWORK", NETWORK);
    // Then auto reloaded by Components/W3 : ethereum.on('chainChanged', (_chainId) => { window.location.reload(); });
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: NETWORK.chainId }],
    });
    ethereum.on("chainChanged", (_chainId) => {
      window.location.reload();
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902 || switchError.code === -32603) {
      try {
        // Add
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [NETWORK],
        });
        // Then switch (then auto reload by ethereum.on('chainChanged',..)
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: NETWORK.chainId }],
        });
      } catch (addError) {
        // handle "add" error
        console.error("HANDLE ADD ERROR", addError);
      }
    }
    // else if (switchError.code == -32002) {
    // Show Reauest Already sent error
    // }
    else {
      console.error("HANDLE SWITCH ERROR", switchError);
    }
  }
};

export default MetamaskButton;
