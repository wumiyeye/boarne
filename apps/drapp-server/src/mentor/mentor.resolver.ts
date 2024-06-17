import * as graphql from "@nestjs/graphql";
import { MentorResolverBase } from "./base/mentor.resolver.base";
import { Mentor } from "./base/Mentor";
import { MentorService } from "./mentor.service";

@graphql.Resolver(() => Mentor)
export class MentorResolver extends MentorResolverBase {
  constructor(protected readonly service: MentorService) {
    super(service);
  }
}
