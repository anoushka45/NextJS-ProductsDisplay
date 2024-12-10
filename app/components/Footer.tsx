import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="pt-6 pb-16 px-6 mt-8 border-t border-[#39393930] ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mt-6">
        <div className="flex flex-col md:flex-row items-start mb-6 md:mb-0 w-full md:w-auto">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/navbar/logo.svg" alt="Logo" width={133} height={65} />
          </div>
          <div className="ml-0 md:ml-12 mb-4 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">INFOS PRATIQUES</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#">À propos</a></li>
              <li><a href="#">Livraisons & Reprises</a></li>
              <li><a href="#">Mode d’emploi</a></li>
              <li><a href="#">F.A.Q</a></li>
            </ul>
          </div>
          <div className="ml-0 md:ml-14 mb-4 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">LÉGAL</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">CGU</a></li>
              <li><a href="#">CGV</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
            </ul>
          </div>
          <div className="ml-0 md:ml-10 mb-4 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">MON COMPTE</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#">Accéder à mon compte</a></li>
              <li><a href="#">Ma liste d’envie</a></li>
              <li><a href="#">Créer un compte</a></li>
              <li><a href="#">Mot de passe oublié</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start mt-6 md:mt-0 w-full md:w-auto">
          <h3 className="font-semibold text-lg mb-2">NOUS SUIVRE</h3>
          <div className="flex space-x-4">
            <a href="#" className="border border-[#39393959] p-2 rounded-md">
              <Image src="/footer/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#" className="border border-[#39393959] p-2 rounded-md">
              <Image src="/footer/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="border border-[#39393959] p-2 rounded-md">
              <Image src="/footer/linkedin-in.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
