import ButtonA from "@/components/ButtonA"
import ButtonB from "@/components/ButtonB"
import ButtonC from "@/components/ButtonC"
import ButtonD from "@/components/ButtonD"
import ButtonE from "@/components/ButtonE"
import CounterA from "@/components/CounterA"
import CounterB from "@/components/CounterB"
import CounterC from "@/components/CounterC"
import CounterD from "@/components/CounterD"
import CounterE from "@/components/CounterE"

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const LENGTH = 1500;

export default function Home() {
  return (
    <div>
      {Array.from(Array(LENGTH), (_, i) => <ButtonA key={`button-a-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <ButtonB key={`button-b-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <ButtonC key={`button-c-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <ButtonD key={`button-d-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <ButtonE key={`button-e-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <CounterA key={`counter-a-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <CounterB key={`counter-a-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <CounterC key={`counter-a-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <CounterD key={`counter-a-${i}`} />)}
      {Array.from(Array(LENGTH), (_, i) => <CounterE key={`counter-a-${i}`} />)}
    </div>
  );
}

