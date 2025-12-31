import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx';
import ChaiList from './components/ChaiList.tsx';
import { Counter } from './components/Counter.tsx';
import { OrderForm } from './components/OrderForm.tsx';
import type { Chai } from './types.ts';


const menu: Chai[] = [
  {id: 1, name: "masala", price: 25},
  {id: 2, name: "ginger", price: 50},
  {id: 3, name: "lemon", price: 60},
]


function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ChaiCard
      name="Headphones"
      price={5000}
      />
      <ChaiCard
      name="iPhone"
      price={50000}
      />
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm
        onSubmit={(order) => {
          console.log("Placed : ", order.name, order.cups);
        }}
        />
      </div>
    </>
  )
}

export default App;
