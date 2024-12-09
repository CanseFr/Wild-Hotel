import {eachDayOfInterval} from 'date-fns';

import {supabase} from "./supabase"
import {notFound} from "next/navigation";


// GET

export async function getCabin(id) {
    const {data, error} = await supabase
        .from('cabins')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        // Docu : https://nextjs.org/docs/app/api-reference/functions/not-found
        notFound()
    }

    return data;
}

export async function getCabinPrice(id) {
    const {data, error} = await supabase
        .from('cabins')
        .select('regularPrice, discount')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
    }

    return data;
}

export const getCabins = async function () {
    const {data, error} = await supabase
        .from('cabins')
        .select('id, name, maxCapacity, regularPrice, discount, image')
        .order('name');

    if (error) {
        console.error(error);
        throw new Error('Les cabines n\'ont pas pu être chargées');
    }

    return data;
};

// Guest id seulement par email
export async function getGuest(email) {
    const {data, error} = await supabase
        .from('guests')
        .select('*')
        .eq('email', email)
        .single();

    // No error
    return data;
}

export async function getBooking(id) {
    const {data, error, count} = await supabase
        .from('bookings')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        throw new Error('La réservation n\'a pas pu être chargée');
    }

    return data;
}

export async function getBookings(guestId) {
    const {data, error, count} = await supabase
        .from('bookings')
        //Seulement ce que l'on a besoin pour le moment, a voire apres
        .select(
            'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
        )
        .eq('guestId', guestId)
        .order('startDate');

    if (error) {
        console.error(error);
        throw new Error('Les réservations n\'ont pas pu être chargées');
    }

    return data;
}

export async function getBookedDatesByCabinId(cabinId) {
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    today = today.toISOString();

    // Getting all bookings
    const {data, error} = await supabase
        .from('bookings')
        .select('*')
        .eq('cabinId', cabinId)
        .or(`startDate.gte.${today},status.eq.checked-in`);

    if (error) {
        console.error(error);
        throw new Error('Les réservations n\'ont pas pu être chargées');
    }

    // Convertir a la date actuel pour el picker
    const bookedDates = data
        .map((booking) => {
            return eachDayOfInterval({
                start: new Date(booking.startDate),
                end: new Date(booking.endDate),
            });
        })
        .flat();

    return bookedDates;
}

export async function getSettings() {
    const {data, error} = await supabase.from('settings').select('*').single();

    if (error) {
        console.error(error);
        throw new Error('Les paramètres n\'ont pas pu être chargés');
    }

    return data;
}

export async function getCountries() {
    try {
        const res = await fetch(
            'https://restcountries.com/v2/all?fields=name,flag'
        );
        const countries = await res.json();
        return countries;
    } catch {
        throw new Error('Impossible de récupérer les pays');
    }
}

// CREATE

export async function createGuest(newGuest) {
    const {data, error} = await supabase.from('guests').insert([newGuest]);

    if (error) {
        console.error(error);
        throw new Error('L\'invité n\'a pas pu être créé');
    }

    return data;
}

export async function createBooking(newBooking) {
    const {data, error} = await supabase
        .from('bookings')
        .insert([newBooking])
        // So that the newly created object gets returned!
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error('La réservation n\'a pas pu être créée');
    }

    return data;
}

// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
    const {data, error} = await supabase
        .from('guests')
        .update(updatedFields)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error('L\'invité n\'a pas pu être mis à jour');
    }
    return data;
}

export async function updateBooking(id, updatedFields) {
    const {data, error} = await supabase
        .from('bookings')
        .update(updatedFields)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error('La réservation n\'a pas pu être mise à jour');
    }
    return data;
}

// DELETE

export async function deleteBooking(id) {
    const {data, error} = await supabase.from('bookings').delete().eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('La réservation n\'a pas pu être supprimée');
    }
    return data;
}
