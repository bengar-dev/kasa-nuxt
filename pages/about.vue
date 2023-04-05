<template>
  <div>
    <img
      src="~/assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
      alt="banner"
      class="banner-about"
    />
    <div class="about-content">
      <ToggleContent
        title="Fiabilité"
        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
  "
      />
      <ToggleContent
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
  "
      />
      <ToggleContent
        title="Service"
        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
  "
      />
      <ToggleContent
        title="Sécurité"
        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
  "
      />
    </div>
  </div>
</template>

<style>
.about-content {
  width: 80%;
  margin: 0 auto;
  padding: 46px 0px;
  display: flex;
  flex-direction: column;
  gap: 33px;
}
.banner-about {
  width: 100%;
  height: 223px;
  object-fit: cover;
  border-radius: 25px;
}
</style>
