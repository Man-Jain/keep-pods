import erc20Abi from "./abis/erc20.json";
import ownableAbi from "./abis/ownable.json";
import sKEEPAbi from "./abis/sKEEP.json";
import registryAbi from "./abis/Registry.json";
import stakingPoolAbi from "./abis/StakingPool.json";

const abis = {
  erc20: erc20Abi,
  ownable: ownableAbi,
  sKEEP: sKEEPAbi,
  registry: registryAbi,
  stakingPool: stakingPoolAbi
};

export default abis;
