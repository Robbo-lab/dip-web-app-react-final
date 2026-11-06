import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router";

const navItems = [
  { to: "/accordion", label: "Accordion" },
  { to: "/context", label: "Context API" },
  { to: "/date-input", label: "Date Input" },
  { to: "/gallery", label: "Gallery" },
  { to: "/", label: "Home", end: true },
  { to: "/lifecycle", label: "Lifecycle" },
  { to: "/likes", label: "Likes" },
  { to: "/nasa-api", label: "NASA API" },
  { to: "/people", label: "People List" },
  { to: "/lifecycle-shared", label: "Shared Lifecycle" },
  { to: "/styled", label: "Styled Component" },
  { to: "/users", label: "User List" },
  { to: "/user-profile", label: "User Profile" },
];

const navColours = [
  "is-link",
  "is-info",
  "is-success",
  "is-warning",
  "is-danger",
  "is-primary",
];

export default function MainLayout() {
  const navigation = useNavigation();

  return (
    <section className="hero is-fullheight is-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Our work in a SPA</h1>
          <h2 className="subtitle">
            All of our components in a Single Page React App
          </h2>
          <nav
            className="columns is-mobile is-multiline is-variable is-1 is-centered"
            aria-label="Main navigation"
          >
            {navItems.map(({ to, label, end }, index) => (
              <div
                key={to}
                className="column is-half-mobile is-one-quarter-tablet"
              >
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `button is-normal is-fullwidth ${navColours[index % navColours.length]} ${isActive ? "is-selected has-text-weight-bold" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </div>
            ))}
          </nav>
          {/* {navigation.state !== "idle" && (
            <p className="notification is-info mt-3" role="status">
              {navigation.state === "submitting"
                ? "Submitting…"
                : "Loading route…"}
            </p>
          )} */}
          <div className="columns is-centered mt-5">
            <div className="column is-half">
              <section
                className="box has-background-scheme-main has-text-text component-section"
                aria-label="React example"
              >
                <Outlet />
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
