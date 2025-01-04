import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = await getTranslations();
	const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person } = renderContent(t);

	return (
		<Flex
			maxWidth="m"
			fillWidth
			gap="xl"
			direction="column"
			alignItems="center"
		>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="row" // Align text and image in a row
				gap="l"
				justifyContent="space-between"
				alignItems="center"
				paddingY="l"
			>
				{/* Left Section: Text Content */}
				<Flex
					direction="column"
					flex={2} // Adjust the space for text content
					gap="m"
				>
					<RevealFx
						translateY="4"
						fillWidth
						justifyContent="flex-start"
						paddingBottom="m"
					>
						<Heading
							wrap="balance"
							variant="display-strong-l"
						>
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="8"
						delay={0.2}
						fillWidth
						justifyContent="flex-start"
						paddingBottom="m"
					>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="heading-default-xl"
						>
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4}>
						<Flex fillWidth>
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								size="m"
							>
								<Flex
									gap="8"
									alignItems="center"
								>
									{about.avatar.display && (
										<Avatar
											style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
											src={person.avatar}
											size="m"
										/>
									)}
									{t("about.title")}
									<Arrow trigger="#about" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>

				{/* Right Section: Image */}
				<Flex
    flex={1} // Adjust the space for the image
    justifyContent="flex-end"
    alignItems="center"
>
    <img
        src="/images/home.png" // Use your image URL here
        alt="Home"
        style={{
            width: '100%', // Adjust the width as needed
            maxWidth: '500px', // Set a maximum width
            height: 'auto', // Maintain aspect ratio
			borderRadius: '80%', // Makes the image circular
        }}
    />
</Flex>

			</Flex>
		</Flex>
	);
}
