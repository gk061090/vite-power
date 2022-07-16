import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, InferType } from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const schema = () =>
  object({
    name: string().required(),
    age: number().when("isBig", {
      is: true,
      then: (schema) => schema.min(5),
      otherwise: (schema) => schema.min(0),
    }),
  });

type FieldValues = InferType<ReturnType<typeof schema>>;

export default function Form() {
  const {
    watch,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "Joe" },
    resolver: yupResolver(schema()),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const name = watch("name");

  console.log({ name });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="name" size="small" error={true} />
        )}
      />
      {/* <input {...register("age", { required: true })} />
      {errors.age && <span>This field is required</span>} */}
      <Button size="medium" type="submit" variant="contained">
        Success
      </Button>
    </form>
  );
}
