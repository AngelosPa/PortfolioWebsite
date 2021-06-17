function Techno(props) {
  let scroller = props.scroller;
  //console.log(scroller);
  let mover = [
    `translateY(${scroller * 0.2}px)`,
    `translateY(${scroller * 0.4}px)`,
    `translateY(${scroller * 0.6}px)`,
    `translateY(${scroller * 0.8}px)`,
    `translateY(${scroller * 0.95}px)`,
    `translateY(${scroller * 0.8}px)`,
    `translateY(${scroller * 0.6}px)`,
    `translateY(${scroller * 0.4}px)`,
    `translateY(${scroller * 0.2}px)`,
  ];
  return (
    <div className="technologies">
      <h2 style={{ transform: `${mover[1]}` }}> TECHNOLOGY KIT</h2>
      <section className="main-treppebox">
        <a
          href="https://getbootstrap.com"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[0]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
          />
        </a>
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[1]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
          />
        </a>

        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[2]}` }}
        >
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
          />
        </a>

        <a
          href="https://www.w3.org/html/"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[3]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[4]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
        </a>
        <a
          href="https://www.linux.org/"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[5]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
            alt="linux"
          />
        </a>

        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[6]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
          />
        </a>
        <a
          href="https://sass-lang.com"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[7]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
          />
        </a>
        <a
          href="https://www.photoshop.com/en"
          target="_blank"
          rel="noreferrer"
          style={{ transform: `${mover[8]}` }}
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
            alt="photoshop"
          />
        </a>
      </section>
    </div>
  );
}

export default Techno;
