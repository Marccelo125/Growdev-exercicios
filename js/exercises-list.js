async function readExercises() {
    const response = await fetch ('./json/exercises-list.json')
    const dataExercises = await response.json()

    dataExercises.forEach(exercise => {
        const containerExercises = document.querySelector('.conteudo-principal')
        const summaryTittle = document.createElement('summary')
        const details = document.createElement('details')
        const articleLink = document.createElement('article')

        summaryTittle.classList.add("titulo-exercicio")
        articleLink.classList.add("botao-link")
        summaryTittle.innerText = `${exercise.title}`

        for (link of exercise.links) {
            const paragraphToLink = document.createElement('p')
            const linkToParagraph = document.createElement('a')

            linkToParagraph.href = `${link.link}`
            linkToParagraph.innerText = `Exercício ${exercise.links.indexOf(link) + 1} - ${exercise.title}`
            linkToParagraph.target = "_blank"

            paragraphToLink.appendChild(linkToParagraph)
            articleLink.appendChild(paragraphToLink)
        }

        containerExercises.appendChild(details)
        details.appendChild(summaryTittle)
        details.appendChild(articleLink)
    });
}
readExercises()

// MODELO EXERCISES
/*
<details>
    <summary class="titulo-exercicio">Tabelas</summary>
    <article class="botao-link">
        <p>
            <a
                href="https://marccelo125.github.io/Growdev-exercicios/exercises/tabelas/ex-01.html"
                target="_blank"
                >Exercício 1 - Tabelas</a
            >
        </p>
        <p>
            <a
                href="https://marccelo125.github.io/Growdev-exercicios/exercises/tabelas/ex-02.html"
                target="_blank"
                >Exercício 2 - Tabelas</a
            >
        </p>
    </article>
</details>
*/