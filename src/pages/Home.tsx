import '../index.css'

export default function Home() {
  return (
    <main className="text-center main py-4">
      <div className="w-[15vw]">
        <p>Inscreva-se no Hogwarts RPG</p>
        <p>Esqueceu sua senha?</p>
        <p>Notícias</p>
        <p>Sobre Hogwarts RPG</p>
        <p>Lista de Colaboradores</p>
        <p>F.A.Q. Guia dos Novatos</p>
      </div>
      <div className="p-4 space-y-4">
        <p>
          Bem-vindo ao Hogwarts Live! Somos o melhor RPG de Harry Potter da rede
          e se você não acredita em nós é só <a href="">criar um personagem</a>{' '}
          para descobrir por si mesmo.
        </p>
        <p>
          Hogwarts Live é um jogo multiplayer online gratuito de Harry Potter,
          que é acessível para deficientes visuais (ou seja, acessível a cegos).
          Depois de começar a jogar, você pode ganhar pontos de experiência,
          galeões e níveis derrotando animais fantásticos, Professores
          indisciplinados, Comensais da Morte malignos e o infame Voldemort para
          reivindicar seu título de Campeão de Hogwarts.
        </p>
        <p>
          Hogwarts Live é um jogo interativo baseado em navegador, portanto, não
          é necessário fazer download. Ou seja, você pode começar a jogar
          imediatamente!{' '}
          <a href="">Participe de Hogwarts online, inscreva-se hoje</a>!
        </p>
        <div>
          <p>
            <span className="text-green-400">
              O horário atual dos trouxas em Hogwarts é{' '}
              <span className="text-pink-400">6:50 pm</span>.
            </span>
          </p>
          <p>
            <span className="text-green-400">
              Próximo novo dia de jogo em:{' '}
              <span className="text-red-600">0h, 25m, 49s (tempo real)</span>
            </span>
          </p>
        </div>
        <p>
          <span className="text-orange-400">
            O mais novo aluno de Hogwarts é:
          </span>{' '}
          Firstyeargirl Oswaldotef
        </p>
        <div>
          <p className="text-green-400">
            A Bruxa Famosa ou Líder do Concurso de Bruxos é Beastmistress
            Talila.
          </p>
          <p className="text-green-400">
            O mais recente Campeão de Hogwarts é:{' '}
            <span className="text-[#ced4da]">
              Secondyeargirl TheaSmallflower
            </span>
          </p>
        </div>
        <div>
          <p>Digite seu nome e senha para entrar no Hogwarts Live.</p>
          <p>
            Ainda não tem uma conta? <a href="">Crie um personagem</a>!
          </p>
          <p className="text-pink-500 font-bold">
            Observe que todas as senhas diferenciam maiúsculas de minúsculas.
          </p>
        </div>
        <p>
          O Hogwarts Live está com inscrições abertas.{' '}
          <a href="">Matricule-se em Hogwarts.</a>
        </p>
      </div>
      <div className="w-[15vw]">
        <p>Colaboradores Online</p>
        <p>Jogadores Online</p>
        <p></p>
        <p></p>
      </div>
      {/* <BecoDiagonal /> */}
    </main>
  )
}
