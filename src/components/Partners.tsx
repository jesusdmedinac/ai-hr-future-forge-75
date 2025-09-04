import citecPartner from "@/assets/partner-citec.png";
import kudertPartner from "@/assets/partner-kudert.png";
import conquitoPartner from "@/assets/partner-conquito.png";
import nestLabPartner from "@/assets/partner-nest-lab.png";
import startupGrindPartner from "@/assets/partner-startup-grind.png";
import hrTechPartner from "@/assets/partner-hr-tech.png";

export function Partners() {
  return (
    <section className="w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Respaldado por líderes del ecosistema
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una iniciativa que cuenta con el apoyo de las principales organizaciones del sector tecnológico y
            financiero
          </p>
        </div>

        <div className="flex flex-row gap-8 p-16 flex-wrap justify-center">
          {/* Auspicia */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">Auspicia</h3>
            <div className="flex justify-center">
              <img
                src={kudertPartner}
                alt="Kudert Logo"
                width={240}
                height={120}
              />
            </div>
          </div>

          {/* Miembros de */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">Miembros de</h3>
            <div className="flex justify-center">
              <img
                src={citecPartner}
                alt="CITEC Logo"
                width={240}
                height={120}
              />
            </div>
          </div>

          {/* Impulsados por */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">Impulsados por</h3>
            <div className="flex justify-center">
              <img
                src={conquitoPartner}
                alt="Conquito Logo"
                width={240}
                height={120}
              />
            </div>
          </div>

          {/* Partners */}
          <div className="text-center w-full">
            <h3 className="text-lg font-semibold text-gray-700">Partners</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <img
                src={nestLabPartner}
                alt="HR Tech Logo"
                width={240}
                height={120}
              />
              <img
                src={startupGrindPartner}
                alt="Startupgrind Logo"
                width={240}
                height={120}
              />
              <img
                src={hrTechPartner}
                alt="HR Tech Logo"
                width={240}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}