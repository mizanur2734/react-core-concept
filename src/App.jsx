import { Suspense } from "react";
import "./App.css";
import BatsMan from "./BatsMan";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json(),
  );

  function handleClick() {
    alert("Button clicked");
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <BatsMan></BatsMan>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("Button 2 clicked");
        }}
      >
        Click Me2
      </button>

      <button onClick={() => alert("Button 3 clicked")}>Click Me</button>
      <button onClick={() => handleAdd5(10)}>Click Add5</button>
      <h1>The Boy</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        quibusdam itaque ex! Voluptatum, recusandae a harum aliquid obcaecati
        rem quis ratione, nulla ullam soluta quod amet assumenda laboriosam
        dolore quos fugit. Vero ipsam aliquam architecto totam amet ratione
        nulla consequuntur provident, nam pariatur aspernatur vel voluptatum ab
        velit non dolor error. Velit voluptatum possimus laboriosam aliquam eum
        ad in, dolorum ratione officiis illo, doloremque excepturi eveniet hic,
        nam eos nemo odit doloribus sed distinctio minus. Aliquid vitae, in
        praesentium nobis quos id dolorum qui aut, odit vel consequuntur error
        natus fugit obcaecati quae fugiat quisquam ipsam quod? Accusantium
        obcaecati iusto nobis repellat dicta, similique dolores! Minus
        architecto accusantium numquam molestiae neque eius. Iure aperiam in
        veritatis voluptatibus quidem perspiciatis. Voluptate eius officiis eum
        fugiat error nihil sint blanditiis, esse inventore hic quasi sed
        molestias quia harum dolor deleniti ratione incidunt repudiandae
        deserunt ab magnam non. Numquam, non natus! Ipsum sunt vitae, aliquid
        quibusdam amet omnis ipsa recusandae harum. Aliquam sapiente voluptates
        delectus iste provident et, eum, veniam cumque ipsam beatae ducimus
        repudiandae. Incidunt eius deserunt et quibusdam nihil quaerat, dolores,
        officia cumque at consequatur voluptatibus voluptatum, tenetur alias non
        sequi maiores beatae quae veniam ducimus? Molestias rem iure sapiente
        obcaecati aspernatur quod doloribus pariatur id itaque exercitationem
        delectus expedita, inventore, vel dolore. Architecto temporibus sapiente
        velit molestiae itaque, at labore assumenda repellendus laudantium nulla
        distinctio. Quia corporis harum nam. Explicabo praesentium alias aliquam
        nulla numquam minima possimus assumenda suscipit voluptate esse nobis
        reiciendis quaerat voluptates sunt aut nihil nam aliquid saepe, hic, sit
        consequuntur, architecto eum maiores. Eos aspernatur iste explicabo
        maxime ipsa, laboriosam, ipsam optio asperiores in nisi ea voluptas
        vitae libero minima accusamus sequi voluptatem est cum nostrum modi
        aperiam? Expedita at possimus, illo ex iste saepe illum autem ullam
        maiores tempore quibusdam, asperiores labore impedit eligendi pariatur.
        Doloribus fugit quis consectetur incidunt optio eum exercitationem
        pariatur quidem reiciendis, deserunt debitis dicta, earum temporibus.
        Repellat, et assumenda. Pariatur, repellat! Similique laudantium
        nesciunt quaerat id repellat fugit sed alias accusamus ea illo. Quae
        veritatis, necessitatibus omnis alias rerum deleniti. Maiores est
        necessitatibus amet modi doloremque dolor, harum facere provident nemo
        quaerat minus culpa architecto. Quis facere, incidunt ea hic in est?
        Rerum rem, officia mollitia doloribus debitis omnis ad quis vel aliquid
        necessitatibus accusantium minus eos illo, consectetur animi quae
        doloremque neque nam culpa nemo iusto laborum harum nobis voluptates?
        Quis voluptatibus perferendis iure minima doloremque maxime explicabo,
        quisquam voluptas vel illo sunt illum officiis, voluptates rem ea,
        cupiditate id soluta reprehenderit neque itaque sit omnis esse! Tenetur
        cumque perferendis maiores doloremque ex nostrum eum ullam placeat
        tempora, doloribus, nisi sed? Nesciunt obcaecati tenetur veniam, ad
        iusto cumque dolorem nobis tempore doloremque. Debitis adipisci suscipit
        labore quos incidunt minus inventore? Doloremque, dolore fugiat
        laudantium voluptatem corrupti ab adipisci sint commodi itaque
        quibusdam. Consectetur doloribus sed commodi tenetur odit pariatur nam
        neque sequi facilis, exercitationem eos accusantium nemo ipsa officia
        qui reprehenderit saepe sit sunt et laborum deserunt autem voluptatum.
        Assumenda repudiandae minus vitae dignissimos molestiae nam magnam non
        dolor.
      </p>
    </>
  );
}

export default App;
