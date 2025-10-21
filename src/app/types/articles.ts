export interface articles {
  time: string             // vreme potrebno za čitanje ili objavu
  heading: string          // glavni naslov
  heading2: string         // sekundarni naslov
  name: string             // naziv ili tip informacije
  date: string             // datum ili garancija
  imgSrc: string           // putanja do slike
  cena: string             // cena
  nameText?: string        // dodatni opis za ime (opcionalno)
  dateText?: string        // dodatni opis za datum/garanciju (opcionalno)
}