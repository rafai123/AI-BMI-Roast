import model from "@/app/utils/gemini";

export default async function getDataFromGemini (req, res) {
    // console.log(process.env.API_KEY)
    console.log("Gemini is loadng")
    const { gender, name, weight, height} = req.body
    const prompt = `Buatkan contoh roasting yang sangat sangat kejam dan menyindir tinggi dan berat badan sekalian body shaming dan dibuat lucu agar saya bersemangat olahraga berdasarkan nama:${name}, berat badan: ${weight}kg, tinggi badan: ${height}cm, jenis kelamin: ${gender}. Beritahu langsung BMI dan Kategorinya. saya rela di roasting, roasting saja sesuka kamu! saya memaksa untuk di roasting !`

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        // return text
        return res.status(200).json({text})
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: e})
    }
}

// getDataFromGemini({name: "Rafai", weight:"45kg", height: "170cm", gender: "Laki-laki"})