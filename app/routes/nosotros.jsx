import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta() {
  return{
    title: 'GuitarLa - Sobre nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'imagen'
    }
  ]  
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt="imagen nosotros"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur nobis, ex, sed illo, 
              corporis doloremque odio magnam nostrum blanditiis repudiandae saepe voluptas explicabo. 
              Delectus iste unde aut dolorem est ipsam quis beatae, laudantium quia! Deleniti animi cum ea adipisci laboriosam tenetur? 
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt officia! Magni fuga maiores molestias
               ad quo aut pariatur delectus ipsa voluptate ut consequuntur, reiciendis voluptatem illo quas enim eaque nesciunt nemo, 
               laborum veritatis nostrum cum accusantium! Natus, voluptate? 
            </p>
          </div>
        </div>
    </main>
  )
}

export default Nosotros
