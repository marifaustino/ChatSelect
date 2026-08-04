import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FormspreeNotConfigured() {
  return (
    <Card className="border-destructive/30 bg-destructive/5">
      <CardHeader>
        <CardTitle>Formulário ainda não configurado</CardTitle>
        <CardDescription>
          O envio de solicitações depende de um endpoint do Formspree.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>
          Crie um formulário gratuito em{" "}
          <a
            href="https://formspree.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            formspree.io
          </a>
          , copie o endpoint (algo como{" "}
          <code>https://formspree.io/f/xxxxxxx</code>) e defina a variável{" "}
          <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> em <code>.env.local</code>.
        </p>
      </CardContent>
    </Card>
  );
}
