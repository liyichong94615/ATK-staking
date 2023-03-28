import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Web3 from "web3";
import Web3Modal from "web3modal";
// @ts-ignore
import WalletConnectProvider from "@walletconnect/web3-provider";
// @ts-ignore
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import Portis from "@portis/web3";
// @ts-ignore
import MewConnect from "@myetherwallet/mewconnect-web-client";
import { getChainData } from "./helpers/utilities";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import ScreenWrapper from "./components/Home/ScreenWrapper";
import Container from "@material-ui/core/Container";

import LandPlotsScreen from "./pages/LandPlotsScreen";
import LandingScreen from "./pages/LandingScreen";
import ListingItems from "./pages/ListingItems";
import OwnListingItems from "./pages/OwnListingItems";
import OwnedListingItems from "./pages/OwnedListingItems";
import ListingScreen from "./pages/ListingScreen";
import ProfileScreen from "./pages/ProfileScreen";

import TopWrap from "./components/TopWrap";

interface IAppState {
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  // my state
  isHide: boolean;
}

const INITIAL_STATE: IAppState = {
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  isHide: true,
};

function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });
  return web3;
}

const history = createBrowserHistory();

class App extends React.Component<any, any> {
  // @ts-ignore
  public web3Modal: Web3Modal;
  public state: IAppState;

  constructor(props: any) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };

    this.web3Modal = new Web3Modal({
      network: this.getNetwork(),
      cacheProvider: true,
      providerOptions: this.getProviderOptions(),
    });
  }

  public componentDidMount() {
    if (this.web3Modal.cachedProvider) {
      this.onConnect();
    }
    this.setState({ isHide: true });
  }

  public onConnect = async () => {
    this.setState({ isHide: true });
    const provider = await this.web3Modal.connect();

    await this.subscribeProvider(provider);

    const web3: any = initWeb3(provider);

    const accounts = await web3.eth.getAccounts();

    const address = accounts[0];

    const networkId = await web3.eth.net.getId();

    const chainId = await web3.eth.chainId();

    await this.setState({
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId,
    });
  };

  public subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => this.resetApp());
    provider.on("accountsChanged", async (accounts: string[]) => {
      await this.setState({ address: accounts[0] });
    });
    provider.on("chainChanged", async (chainId: number) => {
      const { web3 } = this.state;
      const networkId = await web3.eth.net.getId();
      await this.setState({ chainId, networkId });
    });

    provider.on("networkChanged", async (networkId: number) => {
      const { web3 } = this.state;
      const chainId = await web3.eth.chainId();
      await this.setState({ chainId, networkId });
    });
  };

  public getNetwork = () => getChainData(this.state.chainId).network;

  public getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_ID,
        },
      },
    };
    return providerOptions;
  };

  public resetApp = async () => {
    const { web3 } = this.state;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await this.web3Modal.clearCachedProvider();
    this.setState({ ...INITIAL_STATE });
  };

  public _onHideMenu = (bool: boolean) => {
    this.setState({ isHide: bool });
  };

  public render = () => {
    const { address, connected, chainId, isHide } = this.state;
    return (
      <ScreenWrapper>
        <Router history={history}>
          <Container maxWidth="lg">
            <Header
              connect={this.onConnect}
              isHide={isHide}
              setIsHide={(e) => this._onHideMenu(e)}
              connected={connected}
              address={address}
              chainId={chainId}
              killSession={this.resetApp}
            />
          </Container>
          <Switch>
            <Route exact path="/" render={() => <LandingScreen />} />
            <Route exact path="/landplots" render={() => <LandPlotsScreen />} />
            <Route exact path="/listings" render={() => <ListingScreen />} />
            <Route exact path="/profile" render={() => <ProfileScreen />} />
            <Route
              path="/listings/:id"
              render={(props) => <ListingItems {...props} />}
            />
            <Route
              path="/ownlistings/:id"
              render={(props) => <OwnListingItems {...props} />}
            />
            <Route
              path="/ownedlistings/:id"
              render={(props) => <OwnedListingItems {...props} />}
            />
            {/* <Footer /> */}
          </Switch>
        </Router>
      </ScreenWrapper>
    );
  };
}

export default App;
