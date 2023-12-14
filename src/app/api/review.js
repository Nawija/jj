export default async function handler(req, res) {
  const { NEXT_PUBLIC_GOOGLE_API_KEY } = process.env;

  // Tutaj umieść kod do pobrania opinii z Google przy użyciu Places API
  // ...

  res.status(200).json({ message: "Opinie pobrane pomyślnie" });
}
