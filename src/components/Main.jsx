import Banner from "./Banner";
import ShowSPKM,{ShowSPBC, ShowSPH} from "./ShowProduct";

export default function index() {
  return (
    <>
      <Banner></Banner>
      <ShowSPKM></ShowSPKM>
      <ShowSPBC></ShowSPBC>
      <ShowSPH></ShowSPH>
    </>
  );
}