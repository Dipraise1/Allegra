import ImportantNotes from "@/components/whitepaper/ImportantNotes"

export const metadata = {
  title: "Important Notes - ALLEGRA Protocol",
  description: "Important disclaimers and risk information for ALLEGRA Protocol users.",
}

export default function ImportantNotesPage() {
  return (
    <div className="pt-20">
      <ImportantNotes />
    </div>
  )
}
