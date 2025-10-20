const useLogin = (onLogin: () => void) => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      return;
    }
    e.preventDefault();
    onLogin();
  };
  return { handleLogin };
};

export default useLogin;
