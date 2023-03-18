import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

export const useLoader = routeLoader$(({ redirect }) => {
	throw redirect(308, "https://wa.me/5588992637940");
});

export default component$(() => (
	<div>Redirecionando para o nosso WhatsApp</div>
));

export const head: DocumentHead = {
	title: "Vai pro Zap",
	meta: [
		{
			name: "description",
			content: "Faça seu pedido pelo nosso WhatsApp",
		},
	],
};
