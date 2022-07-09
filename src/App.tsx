import { Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, InferType } from "yup";

const schema = () =>
  object({
    name: string().required(),
    age: number()
      .when("isBig", {
        is: true,
        then: (schema) => schema.min(5),
        otherwise: (schema) => schema.min(0),
      })
      .when("$other", ([other], schema) =>
        other === 4 ? schema.max(6) : schema
      ),
  });

type FieldValues = InferType<ReturnType<typeof schema>>;

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(schema()) });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        bordered
        defaultValue="test"
        aria-label="example"
        labelPlaceholder="Default"
        {...register("name")}
      />
      <input {...register("age", { required: true })} />
      {errors.age && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
