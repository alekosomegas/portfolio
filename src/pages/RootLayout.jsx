import Head from "next/head"
import NavBar from "./components/NavBar"


export default function RootLayout({
    children,
    title = "Alexandros Kangkelidis Portfolio",
    description = "Alexandros Kangkelidis Portfolio",
    index},) {
    return (
        <>
            <Head>
                <title key={"title"}>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content={description} key="description"/>
                <meta charset="UTF-8"/>
            </Head>

            <header>
                <NavBar index={index}/>
            </header>

            {children}

        </>
    )
}