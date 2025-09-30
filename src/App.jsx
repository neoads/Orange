import Header from './components/Header';
import conspiraPizzaImage from './assets/conspira_pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={conspiraPizzaImage} alt="Orange Marketing Imobiliario" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Orange Marketing Imobiliario LTDA</h1>
          <h2 className="text-2xl mb-8">47.186.377/0001-40</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções completas em marketing imobiliário com qualidade, inovação e transparência, transformando oportunidades em resultados excepcionais. Com foco na excelência e no atendimento personalizado, buscamos superar as expectativas dos nossos clientes através de estratégias eficazes, produtos de qualidade e design inspirador. Nossa missão é ajudar a criar conexões que reflitam confiança, profissionalismo e satisfação, tornando cada projeto uma experiência memorável."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Orange Marketing Imobiliario LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">47.186.377/0001-40</strong>, foi fundada em <strong className="font-bold">18 de julho de 2022</strong>, na cidade de <strong className="font-bold">Belo Horizonte, Minas Gerais</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">marketing imobiliário</strong>, oferecendo serviços que unem <strong className="font-bold">estratégia, qualidade e inovação</strong> para transformar projetos em sucessos comerciais.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal é focada em <strong className="font-bold">marketing e publicidade imobiliária</strong>, abrangendo desde campanhas tradicionais até estratégias digitais especializadas que complementam e personalizam cada projeto. Com mais de <strong className="font-bold">3 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">variedade de soluções, atendimento especializado e resultados comprovados</strong>, sempre buscando atender às necessidades e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Rua Turquesa, 322, Prado, Belo Horizonte-MG (CEP 30411-177)</strong>, nossa empresa é referência no mercado imobiliário da região, proporcionando uma experiência de atendimento profissional e personalizada. Valorizamos a <strong className="font-bold">transparência, a inovação e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Orange Marketing Imobiliario</strong>, acreditamos que <strong className="font-bold">um bom marketing reflete a paixão e o profissionalismo de quem o executa</strong>. Por isso, nosso compromisso vai além da prestação de serviços: queremos ajudar você a criar <strong className="font-bold">estratégias únicas, eficazes e cheias de resultados</strong>, seja para vendas, locações ou lançamentos imobiliários.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Marketing Digital Imobiliário</strong> – Estratégias que combinam <strong className="font-bold">inovação, criatividade e resultados</strong>.</li>
            <li><strong className="font-bold">Campanhas Publicitárias</strong> – Soluções que complementam e potencializam suas vendas.</li>
            <li><strong className="font-bold">Atendimento Personalizado</strong> – Auxílio na escolha das melhores estratégias para seu negócio.</li>
            <li><strong className="font-bold">Qualidade e Agilidade</strong> – Projetos executados com excelência e entregues no prazo.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Orange Marketing Imobiliario LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 47.186.377/0001-40</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 18/07/2022</li>
            <li><strong className="font-bold">Tempo de Atividade:</strong> 3 anos, 2 meses e 12 dias</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 18/07/2022</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 18/07/2022</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 5.000,00</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Rua Turquesa, 322, Prado, Belo Horizonte-MG, <strong className="font-bold">CEP 30411-177</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg">📧 <strong className="font-bold">E-mail:</strong> <a href="mailto:contate@corssar.com" className="text-blue-500 hover:underline">contate@corssar.com</a></p>
          
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Para correspondência:</h4>
            <p className="text-md">Orange Marketing Imobiliario LTDA</p>
            <p className="text-md">Rua Turquesa 322</p>
            <p className="text-md">Prado</p>
            <p className="text-md">Belo Horizonte MG</p>
            <p className="text-md">30411-177</p>
          </div>
          
          <p className="text-lg mt-4">Na <strong className="font-bold">Orange Marketing Imobiliario</strong>, estamos prontos para ajudar você a <strong className="font-bold">criar as melhores estratégias de marketing</strong>. Entre em contato e descubra como <strong className="font-bold">um marketing bem executado pode transformar seu negócio imobiliário!</strong> 🏠✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Orange Marketing Imobiliario LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 47.186.377/0001-40</p>
          <p className="text-sm"><strong>Razão Social:</strong> Orange Marketing Imobiliario LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 18/07/2022</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 5.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Turquesa, 322, Prado, Belo Horizonte-MG</p>
          <p className="text-sm"><strong>CEP:</strong> 30411-177</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando negócios imobiliários com marketing de qualidade desde 2022</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Orange Marketing Imobiliario LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 47.186.377/0001-40</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Turquesa, 322, Prado, Belo Horizonte-MG, CEP 30411-177</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante reuniões comerciais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou propostas comerciais).</li>
                <li>Informações sobre projetos imobiliários e necessidades de marketing.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de reuniões e acompanhamento de projetos.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de serviços (apenas informações necessárias para execução de projetos).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou dados bancários) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Orange Marketing Imobiliario. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
