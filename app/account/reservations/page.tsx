import ReservationCard from "@/app/_components/ReservationCard";

export const metadata = {
    title: "Effectuer une reservation",
}

export default function Page() {
    // fecth dans la fake api ou creer object plus tard
    const bookings:{id:number}[] = [];

    return (
        <div>

            {bookings.length === 0 ? (
                <p className="text-lg">
                    Vous n&#39;avez pas encore de réservation. Consultez notre{" "}
                    <a className="underline text-accent-500" href="/cabins">
                        cabines de luxe &rarr;
                    </a>
                </p>
            ) : (
                <ul className="space-y-6">
                    {bookings.map((booking:{id:number}) => (
                        <ReservationCard booking={booking} key={booking.id} />
                    ))}
                </ul>
            )}
        </div>
    );
}
