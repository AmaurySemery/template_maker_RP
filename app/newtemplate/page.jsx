import Form from "../components/NewTemplateForm";

export default function NewTemplate() {
    async function addTemplate(body, message) {
        "use server";
        console.log({ title, description });
      }
    return (
        <main className="main">
            <Form formTitle="Création d'un nouveau template" addTemplate={addTemplate} />
        </main>
    );
}