import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/2734512/pexels-photo-2734512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="post-image"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/5536030/pexels-photo-5536030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user-image"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit-button" />
            </Link>
            <img src={Delete} alt="delete-button" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quae
          soluta deleniti nam earum dolores.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta
          natus reiciendis culpa rem eius. Eius delectus nostrum rem praesentium
          quos eum. Sint sunt hic, deserunt aut, voluptatum similique autem
          suscipit rerum eligendi atque consectetur. Corporis veniam explicabo
          accusamus maxime illum cum? Commodi consectetur aliquid dolor non
          tenetur. Omnis at totam voluptas. Eius suscipit blanditiis dolore nam
          placeat. Quaerat officiis corrupti ut eos neque adipisci assumenda
          suscipit explicabo commodi laborum velit molestiae omnis maxime odit
          modi cum dolores, blanditiis, fugit, exercitationem facilis. Dolores,
          sapiente laudantium nisi illo iusto aliquam illum sunt, architecto
          numquam nostrum recusandae molestias ut omnis, nam quisquam obcaecati
          magnam ex perspiciatis quas placeat incidunt id non deserunt rem?
          Autem libero sint accusamus quisquam aliquam magni non! Pariatur
          officiis velit quam. Earum reiciendis mollitia aut magni perspiciatis
          facilis eius minima quibusdam quidem eaque impedit dolor incidunt in
          eum consequuntur eos, reprehenderit doloribus? Adipisci quaerat
          voluptatibus nihil voluptatem cupiditate natus delectus ipsum quod
          nam, corrupti pariatur ab molestiae repellendus earum sit beatae
          obcaecati odio suscipit. Iste assumenda odit, aut aliquid eum quidem
          neque placeat voluptates possimus quos nisi error corporis amet
          nesciunt fuga sequi porro laudantium. Repellendus reprehenderit
          voluptatibus, quos nesciunt sapiente, dolore perspiciatis deleniti et
          cupiditate, ullam aspernatur.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
