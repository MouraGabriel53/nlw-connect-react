import { ArrowRight, Copy } from 'lucide-react';
import{ Button } from "@/components/button";
import{ IconButton } from "@/components/icon-button";
import { Input } from '@/components/input';

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight/>
      </Button>
      <IconButton>
        <Copy/>
      </IconButton>
      <Input type="email" placeholder='Digite seu e-mail'></Input>
    </main>
  );
}
