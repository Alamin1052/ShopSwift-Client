// components/RegisterForm.jsx
"use client"
export default function Register() {
    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert("Registration Successful! Now Login.");
        }
    };

    return (
        <form onSubmit={handleRegister}>
            {/* Input fields for Name, Email, Password */}
            <button type="submit">Register</button>
        </form>
    );
}