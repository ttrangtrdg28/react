/**
 * HOC: High order component
 * - là 1 function sẽ nhân tham số là 1 component và trả 1 component khác
 * - thường được sử dụng để tái sử dụng code hay giao diện
 */

export const wrapperBackground = (Component, background) => {
  const NewComponent = () => {
    return (
      <div className={background}>
        <Component />
      </div>
    );
  };

  return NewComponent;
};
