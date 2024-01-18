import { useEffect, useState } from "react";
import DoctorCart from "../../../components/doctors/doctorCart";
import axios from "axios";
import { Helmet } from "react-helmet";

function Demo() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/doctors/doctors/near/?cat=${"dentist"}&status=approved&query=${"gurugram"}`
      )
      .then((res) => {
        setDoctors(res.data);
      });
  }, []);

  return (
    <>
      {/* SEO Meta */}
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dentist in Noida | Doctors Queries</title>
          <meta
            name="description"
            content=" Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com"
          />
          <link
            rel="canonical"
            href="https://www.doctorsqueries.com/Dentist-in-Noida"
          />
          <meta
            name="keywords"
            content=" Doctors Queries, Partner with Doctors Queries"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@doctorsqueries" />
          <meta
            name="twitter:title"
            content="Become a Partner with Doctors Queries: doctorsqueries.com"
          />
          <meta
            name="twitter:description"
            content="Become a Partner with Doctors Queries and join our network of medical professionals. Expand your network with our trusted platform. Visit at doctorsqueries.com."
          />
          <meta
            name="twitter:image"
            content="https://www.doctorsqueries.com/static/media/Logo%20Dq.c72f55a0d4f93a4b7578.png"
          />
        </Helmet>
      </div>
      {/*End SEO meta  */}

      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-3 py-12 mx-auto">
            <div class="flex flex-col text-center w-full mb-6">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                DoctorsQueries
              </h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">
                Who Is the Best General Physician Doctor in Delhi?
              </h1>
            </div>

            <div class="conatiner-fluid">
              <p>
                
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                iste nostrum esse accusantium atque, animi exercitationem
                expedita illo. Perferendis debitis quas dolores possimus quis
                iste, aut corrupti ipsam non commodi soluta dolore sapiente a
                delectus. Praesentium ratione aliquid mollitia quibusdam,
                maiores voluptas recusandae consequuntur quia dolorum quasi
                nobis cupiditate! Inventore laborum optio facere numquam quidem
                velit perspiciatis neque veritatis pariatur ab iste assumenda
                quisquam nihil praesentium, aspernatur ut aperiam voluptatibus
                enim fugiat dolor. Accusamus doloribus, at culpa sapiente
                veritatis, facere optio odit quis nobis enim nostrum odio autem
                rem earum. Libero voluptatum cupiditate fugit doloribus cumque
                alias excepturi temporibus suscipit incidunt corporis? Delectus
                dolores praesentium quos vitae optio illo officia provident
                voluptatum, recusandae nemo, quibusdam atque odit architecto,
                possimus quo! Similique aperiam aliquam velit est eum labore,
                maxime possimus necessitatibus! Eaque quibusdam atque fuga
                consequuntur soluta optio placeat expedita reiciendis unde
                exercitationem nulla qui, veritatis explicabo aliquam iusto,
                veniam accusamus dignissimos enim! Rem, dolorem perspiciatis
                numquam voluptatem iure similique dignissimos accusantium,
                veritatis at vel enim consectetur eaque dolores ducimus commodi
                doloribus voluptatibus ullam rerum reprehenderit! Perspiciatis
                veritatis, accusamus aliquam laudantium et officiis cumque natus
                molestiae numquam in itaque harum dolorem voluptatum obcaecati
                atque quos porro, quidem qui. Adipisci impedit nostrum quibusdam
                dolores in ut dolor earum cupiditate dolorem soluta illum
                asperiores ratione, fugiat obcaecati, incidunt doloremque, eos
                eius provident alias ad sit quidem itaque mollitia distinctio.
                Impedit earum officia aliquam repellat eveniet dolorum, maxime
                explicabo officiis illo architecto, temporibus inventore est
                optio quasi corporis ex, rem illum non sit modi fugit quia!
                Suscipit, corrupti provident. Esse sint reiciendis amet. Sunt
                consectetur iusto quis ipsa corrupti deserunt quisquam placeat
                velit asperiores necessitatibus maiores dicta sequi, laborum
                nemo et dignissimos sit esse mollitia at maxime ullam nisi.
                Vitae quos repellendus recusandae itaque accusamus veniam
                ratione voluptate praesentium. Accusantium, eius atque ipsa ab
                cupiditate suscipit quis iste possimus, iure velit dolor
                expedita tempore consectetur molestias debitis modi tenetur.
                Provident commodi voluptatem ipsum molestiae eaque qui dolores
                repudiandae ipsam! Ea repudiandae excepturi quis impedit saepe
                pariatur, hic cum officia quam necessitatibus commodi, quisquam
                molestiae dolorem, provident iure numquam voluptates. Tenetur,
                itaque. Numquam qui voluptates fuga accusamus veniam quae
                cupiditate aperiam obcaecati, recusandae fugiat? Odio officia
                harum exercitationem voluptatibus commodi, libero ut rerum
                voluptas optio nisi facere, corporis mollitia itaque temporibus
                vero. Voluptate id sapiente recusandae et? Pariatur assumenda,
                accusantium saepe eaque iste quia officia facilis tempora earum
                natus. Nobis libero nam asperiores omnis. Ipsa nisi pariatur
                suscipit sit blanditiis, sed dicta aut, molestiae cumque commodi
                odio dolore ipsum autem debitis fugiat similique. Esse quisquam,
                facilis optio eius corporis odio veritatis similique repudiandae
                et reiciendis perspiciatis maxime quo nesciunt tempora beatae
                voluptas delectus vel praesentium qui dolores dolorum! Nesciunt
                facere eos culpa quisquam eligendi maiores dolores voluptates
                expedita sed eaque quo quaerat hic earum fugiat at inventore,
                nam repudiandae dolor illum saepe et. Temporibus nisi at laborum
                eveniet, officiis voluptas et iure sunt voluptates ipsa
                recusandae consequatur, commodi odio quasi dolore sapiente odit
                cumque aliquid iusto quae repellendus? Reiciendis tempore maxime
                a labore nemo in quo doloremque, nulla possimus enim repellat
                non vero odit alias provident corporis fuga sit! Dolore
                perferendis doloremque voluptate, quos ullam officiis dolorum
                repellat quae dignissimos? Id repudiandae eius sequi
                reprehenderit ipsam impedit veniam, officiis esse ratione
                adipisci voluptatem odit beatae, in natus, nisi autem cumque!
                Nulla, earum quo sit, placeat modi architecto at amet pariatur
                nam inventore cupiditate. Nemo, tempore. Fugit ipsum repellendus
                sequi obcaecati. Accusamus nesciunt totam id suscipit laboriosam
                minus deserunt libero adipisci distinctio omnis laborum tempora
                odio, saepe magnam doloremque at ut. Saepe, expedita illo? Fuga,
                recusandae sunt, accusamus maiores ea repellendus quia possimus,
                architecto eveniet praesentium ipsam? Doloremque velit corrupti
                ab enim pariatur expedita necessitatibus dolores aspernatur
                exercitationem cum sed est, asperiores minus sit. Odit, nostrum
                expedita perspiciatis numquam quo mollitia nulla neque. Sint
                facere deleniti quae ad eum corrupti suscipit provident quam
                veritatis officia doloribus excepturi, beatae similique hic
                dolorum repellendus quia, at exercitationem accusantium quaerat
                inventore. Natus tempore at aut. Assumenda animi officia nobis
                quae saepe labore vel esse laudantium non dignissimos fuga odio
                at deserunt architecto a, optio omnis id vitae. Illo illum,
                accusamus repellendus hic vel aspernatur. A minus voluptatum ut
                quam laudantium quidem laboriosam reiciendis eaque saepe. Esse
                accusantium voluptatem quod cum deleniti, harum officia
                necessitatibus asperiores, sequi magni laudantium odit nisi amet
                consequuntur atque, quibusdam tenetur. Voluptatem, placeat!
                Molestias officia molestiae aperiam facere error eum illo,
                mollitia nihil itaque doloremque ex, voluptate deserunt
                inventore corrupti, ipsum labore eligendi magnam dolorum. Cumque
                quia magnam minima facere dicta debitis modi dolorem ex nihil
                animi repellat velit deserunt, natus iusto nemo illum maiores?
                Laborum asperiores assumenda illum, amet sint vitae magnam. Hic,
                ad adipisci? Error maiores minima temporibus velit in ipsam
                suscipit. Impedit, optio explicabo eum omnis earum, culpa ipsam
                doloribus asperiores consequuntur veritatis itaque eos quaerat
                odit repellendus nobis quos quis voluptatum officiis quod!
                Tempora aliquam inventore, ducimus maiores reprehenderit, esse
                earum repudiandae nobis animi sunt reiciendis officiis beatae id
                laudantium ad tempore itaque consequatur illum fuga voluptas?
                Sapiente officia quae, totam nulla exercitationem quasi maiores
                numquam doloremque ipsum saepe repellat dolores. Autem quod
                dolorem enim labore eveniet neque. Quae soluta odit possimus
                sunt quisquam, facilis praesentium beatae voluptatem
                voluptatibus accusamus amet, at ea quia sed? Sed sequi, facere
                distinctio possimus odit est aperiam vero quod praesentium iure
                corporis corrupti cupiditate quis ipsam eos maxime esse id
                ratione! Recusandae sed asperiores necessitatibus, id commodi
                consequuntur. Error distinctio mollitia maiores eum, numquam
                nostrum sapiente labore quisquam deserunt!
              </p>
            </div>
          </div>
        </section>
      </div>
      {doctors.map((item) => (
        <DoctorCart data={item} />
      ))}

      {/* Quick Links */}
      {/* <section class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              DoctorsQueries | Best Dentist in Delhi
            </h1>
            <p class="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class="flex flex-wrap list-none -mb-1">
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a href="/anesthesiology-in-delhi" class="text-gray-600 hover:text-red-500">Anesthesiology</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Fifth Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Sixth Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Seventh Link</a>
              </li>
              <li class="lg:w-1/3 mb-1 w-1/2">
                <a class="text-gray-600 hover:text-gray-800">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section> */}

      {/* End Quick Links */}
    </>
  );
}

export default Demo;
