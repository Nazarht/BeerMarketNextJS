import BeerItem from "@/components/beers/BeerItem";
import { MongoClient } from "mongodb";

function HomePage(props) {
    const {beersData} = props

  return (
    <main>
      <div className="main-text">
        <h1>Beers</h1>
      </div>
      <section>
        {beersData.map(beer => {
            return <BeerItem key={beer.id}
            beerData={{
              image: beer.image,
              name: beer.name,
              price: +beer.price,
              id: beer.id
            }}
          />
        })}
        
      </section>
    </main>
  );
}

export async function getStaticProps() {

    const client = await MongoClient.connect(
        "mongodb+srv://Nazarka:Aa28502850@cluster0.alynilr.mongodb.net/beers?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const beersCollection = db.collection("beers");
    
      const beers = await beersCollection.find().toArray();

        return {
            props: {
                beersData: beers.map(beer => {
                    return {
                        id: beer._id.toString(),
                        name: beer.name,
                        description: beer.description,
                        image: beer.image,
                        price: beer.price
                    }
                })
            }
        }
}

export default HomePage;
