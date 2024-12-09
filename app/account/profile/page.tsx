import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import {getCountries} from "@/app/_lib/data-service";

export const metadata = {
    title: "Mise a jour profile",
}

export default function Page() {


    const countryFlag = "fr.jpg";
    const nationality = "france";

    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-4">
                Mettez à jour votre profil
            </h2>

            <p className="text-lg mb-8 text-primary-200">
                La fourniture des informations suivantes facilitera votre processus d&#39;enregistrement
                plus rapide et plus fluide. À bientôt!
            </p>

            <UpdateProfileForm>
                <SelectCountry
                    name="nationality"
                    id="nationality"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    defaultCountry={nationality}
                />
            </UpdateProfileForm>

        </div>
    );
}
