import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { type Blog, blogs } from "../lib/data";
import { getReadableDate } from "../lib/util";
import SectionContainer from "../components/SectionContainer";

// type LoaderParams = {
//   params: {
//     blogId: string;
//   };
// };

// background-color: #8BC6EC;
// background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

export async function loader({ params }: LoaderFunctionArgs) {
  const blogId = params.blogId;
  const blog = blogs.find((value) => value.id == blogId);
  return { blog };
}

export default function BlogPage() {
  const { blog } = useLoaderData() as { blog: Blog };
  const { title, publishedDate, content } = blog;
  return (
    <article>
      <SectionContainer>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-neutral-700">Written by Dinesh M</p>
        <p className="text-sm text-neutral-500">
          {getReadableDate(publishedDate)}
        </p>
        <p className="mt-5 text-lg text-gray-900">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          perspiciatis commodi itaque beatae quod, at, laborum hic voluptas iste
          est inventore exercitationem deleniti reprehenderit doloremque! Sequi
          cum ab, consequatur temporibus voluptatem eum architecto iste aut nisi
          obcaecati repellat distinctio ut ullam. A, porro ea possimus itaque
          vitae dolore assumenda. Possimus aperiam iure cupiditate porro
          repellendus dignissimos natus enim consectetur itaque quod architecto
          deserunt commodi animi autem modi fugiat molestiae perspiciatis totam,
          obcaecati ab, reprehenderit impedit? Qui, saepe sint, aperiam
          <br />
          doloribus minima nisi tempora error maiores perspiciatis repellendus
          fugit, laudantium eius officia aliquid quos! Vel eos tempora alias
          voluptatum saepe optio nobis, excepturi eius amet natus
          necessitatibus, culpa a suscipit repudiandae ipsa est mollitia sunt
          sed et esse consequatur, iure doloremque porro? Officiis tempore
          laboriosam voluptatem nostrum, nam voluptate consectetur sed
          consequatur ipsa dicta odit amet corporis corrupti molestiae sunt,
          laborum placeat eius illo, earum autem error esse aliquid! Possimus
          nostrum rem dicta nihil consequuntur? Neque officia, dolorum incidunt
          itaque quam atque, blanditiis quaerat architecto aut necessitatibus,
          soluta ipsum. Corporis ullam molestiae mollitia error eaque vitae cum
          omnis perferendis quas est quibusdam dolore fugit numquam delectus,
          atque excepturi vel iure laudantium repellat magni officiis voluptates
          repudiandae sapiente aut. Magni ipsam quo recusandae placeat excepturi
          praesentium, optio illum asperiores minus esse fugit itaque nemo
          aliquid, aperiam enim perspiciatis. Ipsam reiciendis expedita dolor
          nobis. Dolorem unde, repudiandae cum similique odit molestiae incidunt
          deserunt ipsum deleniti aspernatur a maxime voluptates architecto
          voluptas rerum dolorum vitae esse qui magnam? Modi numquam aspernatur
          tenetur dolor ab nemo, nihil ipsa soluta velit, accusamus ipsum
          consectetur, cumque unde vero ullam perspiciatis omnis. Aut beatae
          iste cum eos, pariatur ipsa natus modi sint eaque ipsum, aliquam
          nulla. Quisquam maxime soluta sint, laboriosam fugiat ipsum veritatis
          sit reiciendis veniam rerum delectus ut laudantium quas ea aut dolorem
          voluptas rem cumque possimus omnis amet autem unde sunt! Animi, quod.
          Rem modi, tenetur voluptas placeat necessitatibus veniam possimus vel
          recusandae odit fuga itaque exercitationem cum commodi ratione,
          perferendis omnis voluptates nostrum mollitia velit. Deserunt saepe
          itaque atque tenetur, ipsum nostrum blanditiis, necessitatibus
          perferendis pariatur exercitationem nisi quis facere optio repellendus
          officiis, velit ut. Quam at voluptatem quis tempore neque, rerum quae
          dolor quos, numquam veniam ab facilis perferendis. Magni ipsam minus
          odio eveniet non? Necessitatibus, earum sunt hic temporibus similique
          molestias excepturi eaque commodi distinctio mollitia animi quos
          magnam quo voluptas debitis itaque atque autem vel ullam nulla eum a
          impedit aliquid?
        </p>
      </SectionContainer>
    </article>
  );
}
