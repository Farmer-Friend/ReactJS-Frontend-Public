const API_URL = "http://localhost:5000";
import { Navigate } from "react-router-dom";
export async function activity_log(user) {
  if (user) {
    const loggedIn = async () => {
      try {
        const response = await fetch(
          API_URL +
            "/activity/activity?sessionID=" +
            user.sessionToken +
            "&action=" +
            window.location.pathname,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 404) {
          return false;
        }

        const data = await response.json();
        console.log(data);
        return data;
      } catch (err) {
        return false;
      }
    };

    if (path.startsWith("/portal") && !loggedIn()) {
      Navigate("/login");
    }
  } else {
    if (path.startsWith("/portal")) {
      Navigate("/login");
    }
  }
}

export async function login(phoneNo, password) {
  const response = await (
    await fetch(API_URL + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNo, password }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    localStorage.setItem("user", JSON.stringify(response));
    setUser(response);
    Navigate("/portal");
  }
}

export async function logout() {
  localStorage.removeItem("user");
  await fetch(API_URL + "/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  setUser(null);
  Navigate("/login");
}

export async function add_products(
  name,
  price,
  quantity,
  description,
  image,
  user
) {
  const response = await (
    await fetch(API_URL + "/marketPlace/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
      body: JSON.stringify({ name, price, quantity, description, image }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function get_products(user) {
  const response = await (
    await fetch(API_URL + "/marketPlace/getProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function edit_product(
  name,
  price,
  quantity,
  description,
  image,
  user
) {
  const response = await (
    await fetch(API_URL + "/marketPlace/editProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
      body: JSON.stringify({ name, price, quantity, description, image }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function delete_product(name, user) {
  const response = await (
    await fetch(API_URL + "/marketPlace/deleteProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
      body: JSON.stringify({ name }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function add_schedule(date, user) {
  const response = await (
    await fetch(API_URL + "/schedule/addSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
      body: JSON.stringify({ date }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}

export async function get_schedules(user) {
  const response = await (
    await fetch(API_URL + "/schedule/getSchedules", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}

export async function edit_schedule(date, user) {
  const response = await (
    await fetch(API_URL + "/schedule/editSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
      body: JSON.stringify({ date }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}

export async function delete_schedule(date, user) {
  const response = await (
    await fetch(API_URL + "/schedule/deleteSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: user.sessionToken,
      },
      body: JSON.stringify({ date }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}

// adminAPIS
export async function admin_login(phoneNo, password) {
  const response = await (
    await fetch(API_URL + "/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNo, password }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    localStorage.setItem("admin", JSON.stringify(response));
    setAdmin(response);
    Navigate("/admin");
  }
}

export async function admin_logout() {
  localStorage.removeItem("admin");
  await fetch(API_URL + "/admin/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  setAdmin(null);
  Navigate("/admin/login");
}

export async function add_policies(
  name,
  price,
  quantity,
  description,
  image,
  admin
) {
  const response = await (
    await fetch(API_URL + "/admin/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: admin.sessionToken,
      },
      body: JSON.stringify({ name, price, quantity, description, image }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function get_policies() {
  const response = await (
    await fetch(API_URL + "/admin/getProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function edit_policy(
  name,
  price,
  quantity,
  description,
  image,
  admin
) {
  const response = await (
    await fetch(API_URL + "/admin/editProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: admin.sessionToken,
      },
      body: JSON.stringify({ name, price, quantity, description, image }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function delete_policy(name, admin) {
  const response = await (
    await fetch(API_URL + "/admin/deleteProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: admin.sessionToken,
      },
      body: JSON.stringify({ name }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}

export async function verify_product(name, admin) {
  const response = await (
    await fetch(API_URL + "/admin/verifyProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionID: admin.sessionToken,
      },
      body: JSON.stringify({ name }),
    })
  ).json();
  if (response.message) {
    throw new Error(response.message);
  } else {
    return response;
  }
}
