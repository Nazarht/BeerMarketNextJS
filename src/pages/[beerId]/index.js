import BeerDetails from "@/components/beers/BeerDetails";
import { MongoClient, ObjectId } from "mongodb";

function BeerDetailsPage(props) {
  return (
    <BeerDetails beerData={props.beerData}/>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Nazarka:Aa28502850@cluster0.alynilr.mongodb.net/beers?retryWrites=true&w=majority"
  );
  const db = client.db();

  const beersCollection = db.collection("beers");

  const beersArr = await beersCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: beersArr.map((beer) => ({
      params: { beerId: beer._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const beerId = context.params.beerId;

  const client = await MongoClient.connect(
    "mongodb+srv://Nazarka:Aa28502850@cluster0.alynilr.mongodb.net/beers?retryWrites=true&w=majority"
  );
  const db = client.db();

  const beersCollection = db.collection("beers");

  const beerData = await beersCollection.findOne({ _id: new ObjectId(beerId) });

  return {
    props: {
      beerData: {
        id: beerData._id.toString(),
        name: beerData.name,
        description: beerData.description,
        price: +beerData.price,
        image: beerData.image,
      },
    },
  };
}

export default BeerDetailsPage;
