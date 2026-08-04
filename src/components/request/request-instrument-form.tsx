import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function RequestInstrumentForm({ endpoint }: { endpoint: string }) {
  return (
    <form action={endpoint} method="POST" className="space-y-5">
      {/* Spam honeypot (Formspree convention) — left empty by real users. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="_subject"
        value="Nova solicitação de instrumento — ChatSelect"
      />

      <div className="space-y-1.5">
        <Label htmlFor="name">Nome do instrumento *</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="authors">Autores / referência</Label>
        <Input id="authors" name="authors" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="link">Link do artigo ou do instrumento</Label>
        <Input id="link" name="link" type="url" placeholder="https://" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="description">
          Breve descrição do que o instrumento avalia *
        </Label>
        <Textarea id="description" name="description" required rows={4} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Seu e-mail (opcional, para retorno)</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Observações</Label>
        <Textarea id="notes" name="notes" rows={3} />
      </div>

      <Button type="submit">Enviar solicitação</Button>
    </form>
  );
}
